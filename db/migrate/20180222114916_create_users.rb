class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
    	t.string		:name
    	t.string	  :surname
    	t.string		:role
      t.timestamps
    end
  end
end
