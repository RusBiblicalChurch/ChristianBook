module Api
  class BooksController < ActionController::Base

    def index
      books = Book.all
      render json: (books.map do |book|
        book.attributes.merge(picture_url: url_for(book.picture))
      end)
    end

  end
end
