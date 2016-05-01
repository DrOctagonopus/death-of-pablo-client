var app = angular.module('mp4', ['ngRoute', 'mp4Controllers', 'mp4Services']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    
  when('/settings', {
    templateUrl: 'partials/settings.html',
    controller: 'SettingsController'
  }).
  when('/gallery', {
    templateUrl: 'partials/gallery.html',
    controller: 'galleryController'
  }).
  when('/song/:id', {
    templateUrl: 'partials/song.html',
    controller: 'songController'
  }).
  when('/singer/:id', {
    templateUrl: 'partials/singer.html',
    controller: 'singerController'
  }).
  when('/user/:id', {

    templateUrl: 'partials/user.html',
    controller: 'userController'
  }).
  when('/add_user/', {
     templateUrl: 'partials/add_user.html',
     controller: 'addUserController'
   }).
   when('/add_song/', {
     templateUrl: 'partials/add_song.html',
     controller: 'addSongController'
   }).
  
  when('/user/:name', {

    templateUrl: 'partials/user.html',
    controller: 'userController'
  }).
  when('/add_user/', {
    templateUrl: 'partials/add_user.html',
    controller: 'addUserController'
  }).
  when('/add_song/', {
    templateUrl: 'partials/add_song.html',
    controller: 'addSongController'
  }).
  otherwise({
    redirectTo: '/settings'
  });
}]);
