class Book < ApplicationRecord
	
	has_many :ordered_books
  has_many :users, through: :ordered_books

end
