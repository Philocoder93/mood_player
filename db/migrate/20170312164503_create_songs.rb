class CreateSongs < ActiveRecord::Migration[5.0]
  def change
    create_table :songs do |t|
      t.string :title
      t.string :artist
      t.string :uri
      t.string :song_length
      t.references :mood

      t.timestamps
    end
  end
end
