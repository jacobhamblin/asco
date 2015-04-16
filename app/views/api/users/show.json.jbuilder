json.extract! @user, :id, :username, :description
  if current_user.follows?(@user)
    json.follow 'true'
  else
    json.follow 'false'
  end

  if current_user == @user
    json.unfollowable 'true'
  end
