class CreatePresentations < ActiveRecord::Migration
  def change
    create_table :presentations do |t|
      t.string :title
      t.integer :speaker_id

      t.timestamps
    end
  end
end
