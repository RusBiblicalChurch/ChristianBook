ActiveAdmin.register Book do
  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # has_many :users, through: :ordered_books
  permit_params :title, :description, :recommended_church, :price, :picture

  form do |f|
    f.inputs "Books" do
      input :title
      input :price
      input :description
      input :recommended_church
      input :picture, as: :file
    end
    f.actions
  end

  index do
    selectable_column
    id_column
    column :title
    column :price
    column :description
    column :recommended_church
    # column :boock.picture 
    # column "Cover" do |book|
    #   @book.picture ? image_tag(book.picture) : 'No cover'
    # end  
    column :created_at
    actions 
  end

  filter :title
  filter :description
  filter :recommended_church
  filter :created_at
end
