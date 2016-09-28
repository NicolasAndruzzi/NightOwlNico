var app = angular.module('nightOwlNico', ['ngRoute'])

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'mainController'
    })
    .when('/404error', {
      templateUrl: 'views/404error.html',
      controller: '404errorController'
    })
    .when('/theScoreBoar/', {
      templateUrl: 'views/theScoreBoar.html',
      controller: 'theScoreBoarController'
    })
    .when('/codingChallenges/', {
      templateUrl: 'views/codingChallenges.html',
      controller: 'codingChallengesController'
    })
    .otherwise({
      redirectTo: '/404error'
    });
});
