class AddTableUsersBoks < ActiveRecord::Migration[5.1]
  def change
  	create_table :users_books, id: false do |t|
  		t.belongs_to :user, index: true
  		t.belongs_to :book, index: true
  	end
  end
end
