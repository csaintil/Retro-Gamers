class Game < ApplicationRecord
  belongs_to :admins
  has_many :users
  has_many :admins
end
