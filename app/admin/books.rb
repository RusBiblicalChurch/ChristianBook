ActiveAdmin.register Book do
  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # has_many :users, through: :ordered_books
  permit_params :title, :description, :recommended_church, :price

  index do
    selectable_column
    id_column
    column :title
    column :price
    column :description
    column :recommended_church
    column :created_at
    actions
  end

  filter :title
  filter :description
  filter :recommended_church
  filter :created_at
end
