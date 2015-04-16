class Api::FollowingsController < ApplicationController
  def create
    @following = current_user.followings.new({recipient_id: params[:recipient_id], issuer_id: current_user.id})

    if @following.save
      render json: @following
    else
      render json: @following.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @following = current_user.followings.where('issuer_id = ?', current_user.id).where('recipient_id = ?', params[:recipient_id])

    if @following
      @following.destroy(@following.first)
      render json: @following
    else
      render json: {}, status: :unprocessable_entity
    end
  end

  private
  def following_params
    params.require(:following).permit(:recipient_id)
  end
end
