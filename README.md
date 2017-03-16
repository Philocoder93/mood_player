* Teammates, responsibilities, and accomplishments
  - Jay Giron - Hosting Back End
    -
    -
  - Jared Edwards - Rails and API
    -
    -
  - Isaac Duarte - AngularJS Front End
    -
    -
#####################################################
* Trello Board for the project - https://trello.com/b/v1D0AOkJ/project-3
  - blue - Isaac Duarte
  - red - Jay Giron
  - yellow - Jared Edwards

#####################################################
* Timeline and Goals
  - Deployed MVP by lunch on Tuesday

#####################################################
* User Stories
  1. Create a mood
  2. Attach a song to a mood
  3. Update a mood
  4. Delete a mood
  5. Delete a song from a mood
  6. Play a song, or mood playlist
  7. Social Media send a mood playlist to a friend
  8. Link to Spotify to subscribe
  9. Link to buy from
    1. Amazon
    2. Apple
  10. Pick a wardrobe from BombFell to match a mood
  11. Link to Yelp to recommend bar/resto for a mood
  12. Try to create an obscene-named playlist
    1.  Get rejected
  13. Upon trying to create a mood, get recommendations for similars that exist
  14. Suggest books or tv shows to match mood.

#####################################################
* MVP
  1. As a User I should be able to create moods in order to listen to music based on my mood.
  2. As a User I should be able to add songs to moods in order to better match the playlist to my mood.
  3. As a user I should be able to get a playlist of a certain length in order to listen to music based on mood.

* Bronze
  1. As a User I should be able to see the album art of the track I am listening to.
  2. As a User I should be able to up-vote or down-vote tracks in order to help curate the mood specific playlists.

* Silver
  1. As a User I should be able to listen to the tracks listed under certain moods in order to not have to go find the tracks myself.

* Gold
  1. As an Admin I should be able to manually remove and ban songs or moods from the app in order to exclude harmful and offensive material.
  2. As a User I should *not* be able to create moods that contain offensive or abusive language.

#####################################################
PseudoCode:
1. Welcome
    1. introduces the user to the app
    2. Presents option to view index page
2. Create
    1. Anyone can create a mood, or song for mood
    2. User gets a list of moods
        1. Loop through the list of all moods
            1. Limit the number of moods shown at once
    3. Each mood has a link to show songs in that mood
        1. Show links to to show the songs that belong to that mood
        2. Make the songs' image clickable to play the song
    4. Each mood has a link to add a song to that mood
        1. Have a button or link to add a song to a mood
    5. Show form to add a mood
    6. Show form to add a song to a mood
3. Read
    1. User gets a list of moods
        1. Loop through the list of all moods
            1. Limit the number of moods shown at once
        1. Each mood has a link to show songs in that mood
            1. Show links to to show the songs that belong to that mood
            2. Make the songs' image clickable to play the song
4. Update
    1. Show list of moods to click on to edit
    2. Only the creator or powerusers or admins can edit moods
    3. Show form to edit a mood
    4. Show a list of songs independent of the mood, so you can edit the song itself, like ratings or genre
5. Destroy
    1. Only the creator or powerusers or admins can delete moods
    2. Only the creator or powerusers or admins can delete songs from moods
