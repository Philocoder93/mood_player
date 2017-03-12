# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Mood.create!(name: "Happy")
Mood.create!(name: "Sad")

Song.create!(title: "Mr. Brightside", artist: "The Killers", album: "Hot Fuss", album_url: "https://i.scdn.co/image/ac68a9e4a867ec3ce8249cd90a2d7c73755fb487", uri: "spotify:artist:0C0XlULifJtAgn6ZNCW2eu", song_length: 222200, votes: 0, mood_id: 1)
