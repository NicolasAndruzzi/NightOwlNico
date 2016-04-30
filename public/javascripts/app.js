var app = angular.module('nightOwlNico', ['ngRoute'])

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/splash.html',
    controller: 'splashController'
  })
  .when('/404error', {
    templateUrl: 'views/404error.html',
    controller: '404errorController'
  })
  .otherwise({
    redirectTo: '/404error'
  });
});
