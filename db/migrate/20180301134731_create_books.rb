class CreateBooks < ActiveRecord::Migration[5.1]
  def change
    create_table	:books do |t|
    	t.string 		:title
    	t.text 			:description
    	t.boolean 	:recommended_church, :default => false
      t.timestamps
    end
  end
end
