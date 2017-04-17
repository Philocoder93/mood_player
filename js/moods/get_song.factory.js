"use strict";

(function(){
  angular
    .module( "moods" )
    .factory( "get_songFactory", [
      "$resource",
      FactoryFunction
    ])

  function FactoryFunction($resource){
    return $resource("https://mood-player.herokuapp.com/songs/get_song.json")

    // var song_getter = $resource('http://localhost:3000/songs/get_song.json',
    //   {}, {
    //       song_get: {method:'Get', params:{charge:true}}
    //     });
  }
}());
