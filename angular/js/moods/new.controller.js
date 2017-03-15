"use strict";

(function(){
  angular
    .module( "moods" )
    .controller( "MoodsNewController", [
      "$stateParams",
      "moodsFactory",
      "songsFactory",
      "saveFactory",
      MoodsNewControllerFunction
    ]);

  function MoodsNewControllerFunction($stateParams, moodsFactory, songsFactory, saveFactory){


    this.submit = function () {

      let song = songsFactory
      this.response = song.get({artist: this.artist, track: this.track}, function(response){
        console.log(response.uri)
      })
    }
    this.getiframe = function (id) {
       return 'https://embed.spotify.com/?uri=' + id

    }
    this.save = function (uri) {
      let song = saveFactory
      song.get({id: $stateParams.id, uri: uri})
    }
  }
}());
