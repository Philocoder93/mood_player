"use strict";

(function(){
  angular
    .module( "moods" )
    .controller( "MoodsShowController", [
      "$stateParams",
      "moodsFactory",
      MoodsShowControllerFunction
    ]);

  function MoodsShowControllerFunction($stateParams, moodsFactory){
    this.moods = moodsFactory.query()
    this.id = $stateParams.id


    console.log(this.moods)


  }
}());
