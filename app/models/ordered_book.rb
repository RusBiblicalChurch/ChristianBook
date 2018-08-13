class OrderedBook < ApplicationRecord

  belongs_to :book, dependent: :destroy
  belongs_to :user, dependent: :destroy

end
