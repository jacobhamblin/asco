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

require 'test_helper'

class ImageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
