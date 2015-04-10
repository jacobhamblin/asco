# == Schema Information
#
# Table name: images
#
#  id         :integer          not null, primary key
#  owner_id   :integer          not null
#  curated    :boolean          default(FALSE)
#  url        :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Image < ActiveRecord::Base
  validates :url, :owner_id, presence: true
  belongs_to :owner, class_name: :User, foreign_key: :owner_id
end
