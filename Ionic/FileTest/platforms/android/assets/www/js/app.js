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

        // 创建日志文件，非法文件名：2016/7/27.txt
        var filename = 'log.log';
        $cordovaFile.createFile(cordova.file.externalRootDirectory, filename, true)
          .then(function (success) {
            console.log(" create " + filename + " success ");
          }, function (error) {
            console.log(" create " + filename + " failure ");
          });

        // 以追加的方式写入已存在日志文件。
        var content = "text\n"
        $cordovaFile.writeExistingFile(cordova.file.externalRootDirectory, filename, content)
          .then(function (success) {
            console.log(" write to " + filename + " success ");
          }, function (error) {
            console.log(" write to " + filename + " failure ");
          });

        // 定时任务
        var intervalTime = 1000 * 3600 * 24;
        setInterval(function() {
            // 压缩文件
            var pathToFileInString  = cordova.file.externalRootDirectory + filename;
            var pathToResultZip     = cordova.file.externalRootDirectory;
            var dateString = new Date().toLocaleDateString().replace(/\//g, '-');
            console.log(dateString);
            var zipFileName = "stationRF." + dateString;
            JJzip.zip(pathToFileInString, {target:pathToResultZip, name:zipFileName}, function(data){
                /* Wow everiting goes good, but just in case verify data.success*/
                console.log(" zip " + filename + " to " + zipFileName + " success ");
            }, function(error){
                /* Wow something goes wrong, check the error.message */
                console.log(" zip " + filename + " to " + zipFileName + " failure ");
            });

            // 删除被压缩文件
            $cordovaFile.removeFile(cordova.file.externalRootDirectory, filename)
              .then(function (success) {
                console.log(" remove " + filename + " success ");
              }, function (error) {
                console.log(" remove " + filename + " success ");
              });

            // 重新创建文件
            $cordovaFile.createFile(cordova.file.externalRootDirectory, filename, true)
              .then(function (success) {
                console.log(" create " + filename + " success ");
              }, function (error) {
                console.log(" create " + filename + " failure ");
              });
        }, intervalTime);
    });
});
