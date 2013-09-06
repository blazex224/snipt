'use strict';

(function(window) {

  if (typeof angular !== 'undefined') {

    var root = window;
    var $ = root.jQuery;
    var controllers = {};
    var app = root.app;

    app.filter('startFrom', function() {
      return function(input, start) {
        start = +start;
        return input ? input.slice(start) : input;
      };
    });

    // Controllers.
    controllers.JobSearchController = function($http, $scope) {
      $scope.currentPage = 0;
      $scope.pageSize = 10;

      $http.get('/jobs-json/').then(function(response) {
        $scope.jobs = response.data;
      });

      $scope.numberOfPages = function() {
        if ($scope.jobs) {
          return Math.ceil($scope.jobs.length / $scope.pageSize);                
        }
      };
      
    };

    // Assign the controllers.
    app.controller(controllers);

  }

})(window);