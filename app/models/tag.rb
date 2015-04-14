class Tag < ActiveRecord::Base
  validates :title, null: false
  has_many :taggings
end
