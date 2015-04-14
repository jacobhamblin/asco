class SessionsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    user = User.find_by_credentials(
    params[:user][:email],
    params[:user][:password]
    )

    if user
      sign_in(user)
      redirect_to root_url
    else
      flash.now[:errors] = ["Invalid credentials"]
      render :new
    end
  end

  def destroy
    sign_out
    redirect_to new_session_url
  end

  def delete
    sign_out
    redirect_to new_session_url
  end
end
