class CreateOrderedBooks < ActiveRecord::Migration[5.1]
  def change
    create_table :ordered_books do |t|
    	t.belongs_to :user,  foreign_key: true,  index: true
    	t.belongs_to :book,  foreign_key: true,  index: true
    	t.boolean :confirmed, default: false
      t.timestamps
    end
  end
end
