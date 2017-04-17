"use strict";

(function(){
  angular
    .module( "moods" )
    .controller( "MoodsNewController", [
      "$location",
      "$stateParams",
      "moodsFactory",
      "get_songFactory",
      "saveFactory",
      MoodsNewControllerFunction
    ]);

  function MoodsNewControllerFunction($location,$stateParams, moodsFactory, get_songFactory, saveFactory){


    this.submit = function () {

      var song = get_songFactory
      this.response = song.get({artist: this.artist, track: this.track}, function(response){
        console.log(response.uri)
      })
    }
    this.getiframe = function (id) {
       return 'https://embed.spotify.com/?uri=' + id

    }
    this.save = function (uri) {
      var song = saveFactory
      song.get({id: $stateParams.id, uri: uri})
      $location.path("/moods/"+$stateParams.id.toString()+"/show")
    }
  }
}());
