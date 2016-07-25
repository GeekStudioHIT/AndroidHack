// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.controller('myCtrl', function($scope, $cordovaFile) {
    document.addEventListener('deviceready', function() {
//        var date = new Date();
//        var fileName = date.toLocaleDateString() + date.toLocaleTimeString() + ".txt";
//         console.log(fileName);
        $cordovaFile.createFile(cordova.file.externalRootDirectory, '2016-07-25-22-44-22.txt', true)
          .then(function (success) {
            // success
            console.log("success");
          }, function (error) {
            // error
            console.log("failure");
          });
        $cordovaFile.writeExistingFile(cordova.file.externalRootDirectory, "new_file.txt", "text")
          .then(function (success) {
            // success
          }, function (error) {
            // error
          });
    });
});

