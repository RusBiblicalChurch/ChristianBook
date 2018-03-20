class Book < ApplicationRecord

  has_and_belongs_to_many :users, through: :ordered_books

end
