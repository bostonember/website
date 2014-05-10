class Speaker < ActiveRecord::Base
  has_many :presentations
end
