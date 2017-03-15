"use strict";

(function(){
  angular
    .module( "moods" )
    .factory( "songsFactory", [
      "$resource",
      FactoryFunction
    ])

  function FactoryFunction($resource){
    return $resource("http://localhost:3000/songs/get_all_songs.json")

    // var song_getter = $resource('http://localhost:3000/songs/get_song.json',
    //   {}, {
    //       song_get: {method:'Get', params:{charge:true}}
    //     });
  }
}());
