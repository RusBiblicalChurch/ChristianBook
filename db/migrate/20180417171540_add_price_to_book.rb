class AddPriceToBook < ActiveRecord::Migration[5.1]
  def change
    add_column :books, :price, :integer
  end
end
