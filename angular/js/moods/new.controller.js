"use strict";

(function(){
  angular
    .module( "moods" )
    .controller( "MoodsNewController", [
      "moodsFactory",
      MoodsNewControllerFunction
    ]);

  function MoodsNewControllerFunction(moodsFactory){
    this.clicked = 0
    this.submit = function () {

      let moods = moodsFactory
      this.response = moods.get({artist: this.artist, track: this.track}, function(response){
        console.log(response.uri)
      })







    }
    this.getiframe = function (id) {
       return 'https://embed.spotify.com/?uri=' + id

    };

    this.hello = function () {
      console.log('hey there you made it here')
    }
  }
}());
