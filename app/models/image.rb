# == Schema Information
#
# Table name: images
#
#  id          :integer          not null, primary key
#  owner_id    :integer          not null
#  curated     :boolean          default(FALSE)
#  url         :string           not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Image < ActiveRecord::Base
  validates :url, :owner_id, presence: true
  belongs_to :owner, class_name: :User, foreign_key: :owner_id
  has_many :taggings
  has_many :tags, through: :taggings, source: :tag
end
