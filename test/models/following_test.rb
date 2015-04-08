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

require 'test_helper'

class FollowingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
