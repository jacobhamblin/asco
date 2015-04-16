class Api::UsersController < ApplicationController
  def show
    @user = User.includes(:followed_users, :following_users, :images).find(params[:id])

    render "show"
  end

  def update
    @user = User.find(params[:id])

    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors.full_messages
    end
  end

  private
  def user_params
    params.require(:user).permit(:avatar, :username)
  end
end
