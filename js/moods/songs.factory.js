"use strict";

(function(){
  angular
    .module( "moods" )
    .factory( "songsFactory", [
      "$resource",
      FactoryFunction
    ])

  function FactoryFunction($resource){
    return $resource("https://mood-player.herokuapp.com/songs/get_all_songs.json")
  }
}());
