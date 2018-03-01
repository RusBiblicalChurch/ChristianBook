class User < ApplicationRecord

  devise	:database_authenticatable, :registerable,
    			:recoverable, :rememberable, :trackable, :validatable

  validates :name, presence: true
  validates :surname, presence: true

end
