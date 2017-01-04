(function() {
  "use strict";

  angular
    .module('myApp')
    .config(['$stateProvider', '$urlRouterProvider', routerConfig]);

  function routerConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'html/partial-home.html'
    })
    .state('groups', {
      url: '/groups',
      templateUrl: 'html/partial-groups.html'
    })
    .state('playoffs', {
      url: '/playoffs',
      templateUrl: 'html/partial-playoffs.html'
    })
  }
})();
