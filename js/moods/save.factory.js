"use strict";

(function(){
  angular
    .module( "moods" )
    .factory( "saveFactory", [
      "$resource",
      FactoryFunction
    ])

  function FactoryFunction($resource){
    return $resource("https://mood-player.herokuapp.com/moods/save_mood.json")
  }
}());
