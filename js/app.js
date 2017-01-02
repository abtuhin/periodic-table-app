var periodicTableApp = angular.module('periodicTableApp', [
  'ngRoute',
  'atomsControllers'
]);

periodicTableApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl: 'partials/table.html',
    controller: 'AllAtomController'
  }).
  when('/details/:itemId', {
    templateUrl: 'partials/single.html',
    controller: 'SingleAtomController'
  }).
  otherwise({
    redirectTo: '/'
  });
}]);