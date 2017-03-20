var atomsControllers = angular.module('atomsControllers', []);

atomsControllers.controller('AllAtomController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/periodicTable.json').success(function(data,status) {
    $scope.atoms = data;
    $scope.atomsOrder = 'number';
  });
}]);


atomsControllers.controller('SingleAtomController', ['$scope', '$http',
'$routeParams', function($scope, $http, $routeParams) {
  $http.get('js/periodicTable.json').success(function(data) {
    $scope.atoms = data;
    $scope.whichItem = $routeParams.itemId;
  });
}]);