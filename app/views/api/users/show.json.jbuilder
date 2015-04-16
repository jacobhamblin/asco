json.extract! @user, :id, :username
 if current_user.follows?(@user)
   json.follow 'true'
 end
