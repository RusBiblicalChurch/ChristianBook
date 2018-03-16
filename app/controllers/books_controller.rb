class BooksController < ApplicationController

	def index
		@books = Book.all
		respond_to do |format|
			format.json {render json: @books}
	end

	private
	
end
