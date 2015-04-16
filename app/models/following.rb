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
  validates :recipient_id, :issuer_id, presence: true
  validates :issuer_id, uniqueness: { scope: :recipient_id }

  belongs_to :recipient, class_name: :User
  belongs_to :issuer, class_name: :User

  def current_user_cannot_follow_self
    if recipient_id == issuer_id
      errors.add(:issuer_id, "can't be the same as issuer_id")
    end
  end
end
