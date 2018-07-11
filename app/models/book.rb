class Book < ApplicationRecord

  has_many :ordered_books
  has_many :users, through: :ordered_books
  has_one_attached :picture

  def formation_url
    url_for(book.picture)
  end
end
