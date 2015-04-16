# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  username        :string
#  password_digest :string           not null
#  session_token   :string
#  avatar          :string           default("https://s3-us-west-1.amazonaws.com/asco-jkh/layout/defavie.jpg")
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  validates :email, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :email, :session_token, uniqueness: true

  attr_reader :password

  has_many :images, foreign_key: :owner_id
  has_many :followings, class_name: :Following, foreign_key: :recipient_id
  has_many :following_users, through: :followings, source: :issuer
  has_many :follows, class_name: :Following, foreign_key: :issuer_id
  has_many :followed_users, through: :follows, source: :recipient
  has_many :followed_images, through: :followed_users, source: :images

  before_validation :ensure_session_token

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def reset_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def follows?(user)
    self.followed_users.include?(user)
  end

  private
  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end
end
