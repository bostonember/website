class SpeakerSerializer < ActiveModel::Serializer
  embed :ids, include: true

  attributes :id, :name
  has_many :presentations
end
