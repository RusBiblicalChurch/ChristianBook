class User < ApplicationRecord

	 has_and_belongs_to_many :books, through: :ordered_books

  devise	:database_authenticatable, :registerable, :recoverable,
  				:rememberable, :trackable, :validatable

  validates :name, presence: true
  validates :surname, presence: true

end
