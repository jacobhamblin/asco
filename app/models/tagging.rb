# == Schema Information
#
# Table name: taggings
#
#  id         :integer          not null, primary key
#  image_id   :integer          not null
#  tag_id     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tagging < ActiveRecord::Base
  belongs_to :image
  belongs_to :tag
end
