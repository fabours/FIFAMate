(function() {
  "use strict";

  angular
    .module('myApp')
    .controller('HeaderController', ['$location', headerController]);

  function headerController($location) {
    var vm = this;

    vm.isActive = function(location) {
      return location === $location.path();
    }
  }
})();
