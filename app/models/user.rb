class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable

	has_and_belongs_to_many :books,  through: :ordered_books


  devise	:database_authenticatable,  :recoverable,
  				:rememberable, :trackable, :validatable

  validates :name, presence: true
  validates :surname, presence: true

end
