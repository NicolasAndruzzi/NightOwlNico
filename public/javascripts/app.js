var app = angular.module('nightOwlNico', ['ngRoute'])

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/splash.html',
      controller: 'splashController'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'aboutController'
    })
    .when('/404error', {
      templateUrl: 'views/404error.html',
      controller: '404errorController'
    })
    .otherwise({
      redirectTo: '/404error'
    });
});
