module Api
  class BooksController < ActionController::Base

    def index
      books = Book.all
      render json: books.to_json(:include => :picture)
    end
    
  end
end