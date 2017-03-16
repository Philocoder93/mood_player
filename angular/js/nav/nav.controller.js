"use strict";

(function(){
  angular
  .module("nav")
  .controller("nav", [
    "$state",
    NavFunction
  ])

  function NavFunction($state) {
    this.update = function () {
      var state = $state
      this.state = state
    }
    this.update();
  }
}());
