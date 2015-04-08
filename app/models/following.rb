# == Schema Information
#
# Table name: followings
#
#  id           :integer          not null, primary key
#  recipient_id :integer          not null
#  issuer_id    :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Following < ActiveRecord::Base
  belongs_to :recipient, class_name: :User
  belongs_to :issuer, class_name: :User
end
