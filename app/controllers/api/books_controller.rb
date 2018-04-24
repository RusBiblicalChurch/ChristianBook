module Api
  class BooksController < ActionController::Base

    def index
      @books = Book.all
      render json: @books
    end

  end
end
