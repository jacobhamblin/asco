json.extract! image, :id, :owner_id, :url, :description, :created_at, :updated_at

json.owner do
  json.extract! image.owner, :id, :username, :email, :avatar
end
