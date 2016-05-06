var mp4Controllers = angular.module('mp4Controllers', ['ngRoute', 'ngCookies']);

mp4Controllers.directive('clickAnywhereButHere', function($document, $parse) {
    return {
        restrict: 'A',
        scope: {
            callback : '=clickAnywhereButHere'
        },
        link: function(scope, element, attr, ctrl) {
            var handler = function(event) {
                //console.log("in handler");
                //console.log(event.target.tagName);
                //console.log(event.target.tagName == "LI");
                if (!element[0].contains(event.target) && event.target.tagName != "LI" && event.target.tagName != "A") {
                    scope.$apply(scope.callback(event));
                 }
            };

            $document.on('click', handler);
            scope.$on('$destroy', function() {
                $document.off('click', handler);
            });
        }
    }
});

//mp4Controllers.controller('SettingsController', ['$scope' , '$window', '$location', '$cookieStore', 'formDisplay', 'signinRequest', 'artists', 'songs','singerInfo', 'songInfo', 'artistsOfSong', 'user', function($scope, $window, $location, $cookieStore, formDisplay, signinRequest, artists, songs, singerInfo, songInfo, artistsOfSong, user) {
mp4Controllers.controller('SettingsController', ['$scope' , '$window', '$location', '$cookieStore', 'formDisplay', 'signinRequest', 'artists', 'songs', 'artistsOfSong', 'user', function($scope, $window, $location, $cookieStore, formDisplay, signinRequest, artists, songs, artistsOfSong, user) {

  var ifmodal = false; //click account in modal
  $scope.url = $window.sessionStorage.baseurl;
    $scope.songs = [];
    $scope.rappers = [];
    $scope.error = "";
    $scope.errorlogin = "";
 
  $scope.singinRequest = signinRequest.getData();
  
  $scope.$watch('singinRequest', function(newValue, oldValue){
      if(newValue == true){
          console.log("get request");
          $scope.showRegister();
          signinRequest.setData(false);
      }
  });
    
  $scope.showRegister = function(){
      if(ifmodal)
          $scope.closeModal();
      if($cookieStore.get('username') === undefined || $cookieStore.get('username') === null)
         formDisplay.hideAndShow(null, '#register');
      else{
          curr_path = "user/"+$cookieStore.get('username');
          $location.path(curr_path);
      }
  }
  $scope.hideRegister = function(event){
      //console.log("hide register");
      formDisplay.hideAndShow('#register', null);
  }
  $scope.showLogin = function(){
      formDisplay.hideAndShow('#register', '#login');
  }
  $scope.hideLogin = function(){
      //console.log("hide login");
      formDisplay.hideAndShow('#login', null);
  }
  $scope.registerUser = function(){
      $scope.error = "";
      console.log("registerUser");
      //console.log($('#file'));
      var f = $('#file')[0].files[0];
      if(f !== undefined && f !== null){
          var r = new FileReader();

          r.onloadend = function(e){
                console.log("onloadend");
                console.log(r);
                console.log(f);
                $scope.register_thumbnail = e.target.result;
                //console.log($scope.register_thumbnail);
                user.register($scope.register_name, $scope.register_password, $scope.register_thumbnail).success(function(data){
                    console.log(data);
                    $cookieStore.put('username', data['data']['username']);
                    $cookieStore.put('userid', data['data']['_id']);
                    var curr="/user/"+$cookieStore.get('username');
                    
                    $location.path(curr);
                    
                }).error(function(data){
                    console.log("error");
                    console.log(data); 
                    if(data['message']['code'] === "11000" || data['message']['code'] === 11000){
                        $scope.error = "Sorry the username is already used";
                    }else{
                        $scope.error ="Sorry, the register failed. Please try later...";
                    }

               });
          };
          r.readAsDataURL(f);
      }else{
          console.log("no picture");
          user.register($scope.register_name, $scope.register_password, undefined).success(function(data){
                    console.log(data);
                    $cookieStore.put('userid', data['data']['_id']);
                    $cookieStore.put('username', data['data']['username']);
                    var curr="/user/"+$cookieStore.get('username');
                    console.log(curr);
                    $location.path(curr);
                    
         }).error(function(data){
                console.log("error");
                console.log(data); 
                if(data != null && (data['message']['code'] === "11000" || data['message']['code'] === 11000)){
                    $scope.error = "Sorry the username is already used";
                }else{
                    $scope.error ="Sorry, the register failed. Please try later...";
                }
               
           });
      }
      
      
  }
  
  $scope.loginUser = function(){
      $scope.errorlogin = "";
      console.log("loginUser");
      user.login($scope.login_name, $scope.login_password).success(function(data){
          $cookieStore.put('userid', data['data']['_id']);
          $cookieStore.put('username', data['data']['username']);
          var curr="/user/"+$cookieStore.get('username');
         $location.path(curr);
      }).error(function(resp){
        console.log(resp);
          $scope.errorlogin = resp['message'];
      });
      
  }
  
  $scope.closeModal = function(){
      console.log("modal closed");
        //$(".modal1").css("display", "none"); 
      $( ".modal1").slideUp( "slow", function() {
            ifmodal = false;
                // Animation complete.
                //$(".modal1").css("display", "none");
            });
  }
  $scope.modal = function(){
      console.log("modal clicked");
        $( ".modal1").slideDown( "slow", function() {
            // Animation complete.
            ifmodal = true;
        });
  }

  $scope.ifrapper = true; 
 
  $scope.toRapper = function(){
      $scope.ifrapper = true;
      console.log("toRapper");
      $("#rapper").css("color", "black");
      $("#rapper").css("background-color", "yellow");
      $("#song").css("color", "white");
      $("#song").css("background-color", "black");
      $(".rapperItem").css("display", "block");
      $(".songItem").css("display", "none");
  }
  
  $scope.toSong = function(){
      $scope.ifrapper = false;
      console.log("toRapper");
      $("#song").css("color", "black");
      $("#song").css("background-color", "yellow");
      $("#rapper").css("color", "white");
      $("#rapper").css("background-color", "black");
      $(".songItem").css("display", "block");
      $(".rapperItem").css("display", "none");
  }
  
  $scope.toSongPage = function(curr){
        var singerIds = curr['artistIds'];
        var curr_path = "song/" + curr['_id'];
        $location.path(curr_path);
       
        
    }
  $scope.toSingerPage = function(curr){
        //console.log("toSingerPage");
        //singerInfo.setData(curr);
        //console.log(singerInfo.getData());
        var curr_path = "singer/" + curr["_id"];
        $location.path(curr_path);
    }
  
  
  $scope.$watch('searchTerm', function displayList(newValue, oldValue){
      
      if($scope.searchTerm != "" && $scope.searchTerm != null && $scope.searchTerm != undefined ){
          console.log("there is text");
         $("#searchList").css("display", "block");
      }else {
          $scope.ifrapper = true; 
         $("#searchList").css("display", "none"); 
         $("#rapper").css("color", "black");
         $("#rapper").css("background-color", "yellow");
         $("#song").css("color", "white");
         $("#song").css("background-color", "black");
         $(".rapperItem").css("display", "block");
         $(".songItem").css("display", "none");
      }
  });
  
  $scope.close = function(){
      console.log("closed");
      $("#searchList").css("display", "none");
      $("#searchbar").animate({
            marginTop: "-100px"
      });
  }
  $scope.span = function(){
       
      $("#searchbar").animate({
          marginTop: "0px"
      });
      artists.get().success(function(data){ 
          $scope.rappers= data['data'];
          console.log($scope.rappers);
      });
      songs.get().success(function(data){
         $scope.songs = data['data'];
          console.log($scope.songs);
      });
  }


}])
.filter('subText', function(){
    return function(text, phrase){
        console.log('subText');
        console.log(text);
        var match = new RegExp('('+phrase+')', 'gi');
        if(match){
            console.log("match found at "+match.index);
        }
        return text;
    }
})
.filter('highlight', function($sce) {
    return function(text, phrase) {
        //console.log("hightli")
      console.log(phrase);
        console.log(text);
      if (phrase){
          text = text.replace(new RegExp('('+phrase+')', 'gi'), '<span style="color: yellow">$1</span>');
          //console.log(new RegExp('('+phrase+')', 'gi').exec(text)); 
        //while(match = new RegExp('('+phrase+')', 'gi').exec(text) != null){
         //       console.log("match found at "+match.index);
           // }
      }
          //console.log(text);
        return $sce.trustAsHtml(text);
    }
});

//mp4Controllers.controller('galleryController', ['$scope', '$location',  '$cookieStore', 'singerInfo', 'signinRequest',  'artists', function($scope, $location, $cookieStore, singerInfo, signinRequest,  artists) {
mp4Controllers.controller('galleryController', ['$scope', '$location',  '$cookieStore', 'signinRequest',  'artists', function($scope, $location, $cookieStore, signinRequest,  artists) {
    $scope.initData = function(){
        artists.get().success(function(data){ 
            if(data!= undefined && data != null){
                console.log(data['data'])
                $scope.singerList = data['data'];
                $scope.curr = $scope.singerList[1];
            }
        });
    }
    $scope.initData();
   
    $scope.displayDetails = function(curr){
        $scope.curr = curr;
    }
    $scope.closeModal = function(){
      console.log("modal closed");
        //$(".modal1").css("display", "none"); 
        $( ".modal1").slideUp( "slow", function() {
                // Animation complete.
                //$(".modal1").css("display", "none");
            });
      }
    $scope.modal = function(){
          console.log("modal clicked");
            $( ".modal1").slideDown( "slow", function() {
                // Animation complete.

            });
      }
   $scope.toSingerPage = function(curr){
        //console.log("toSingerPage");
        //singerInfo.setData(curr);
        //console.log(singerInfo.getData());
        var curr_path = "singer/" + curr["_id"];
        $location.path(curr_path);
    }
   
    $scope.toAccount = function(){
        username = $cookieStore.get('username');
        if(username == undefined || user== null){
            signinRequest.setData(true, function(){
                $location.path("/settings");
            });
        }else{
            curr_path = "user/"+username;
            $location.path(curr_path);
        }
    }

}]);


mp4Controllers.controller('singerController', ['$scope','$routeParams', 'artistsOfSong', '$location', '$cookieStore', 'signinRequest', 'songs', 'artists', 'allArtists', 'user', function($scope, $routeParams, artistsOfSong, $location, $cookieStore, signinRequest, songs, artists, allArtists, user) {
    //$scope.singer = singerInfo.getData();
    
    $scope.initData = function(){
        var artistid = $routeParams.id;
        artists.getOne(artistid).success(function(data){
            if(data !== undefined && data !== null){
                $scope.singer = data['data'];
                $scope.singerId = $scope.singer['_id'];
                $scope.getSongsOfSinger();
               
            }
            //console.log($scope.singer.url);
        });
    }
    $scope.initData();
    
    
    var userId = $cookieStore.get('userid');
    //console.log('UserId: ' + userId);
    $scope.isFavorite = false;
    if(userId != undefined) {
      user.getOneById(userId)
        .success(function(resp){
          $scope.user = resp.data;
          if($scope.user.favArtistIds.indexOf($scope.singerId) != -1)
            $scope.isFavorite = true;
        })
        .error(function(resp) {
          console.log(resp);
        });
    }
    
    $scope.closeModal = function(){
      console.log("modal closed");
      $( ".modal1").slideUp( "slow", function() {

          });
    }
    $scope.modal = function(){
          console.log("modal clicked");
            $( ".modal1").slideDown( "slow", function() {
                // Animation complete.

            });
      }
    $scope.toAccount = function(){
        username = $cookieStore.get('username');
        if(username == undefined || user== null){
            signinRequest.setData(true, function(){
                $location.path("/settings");
            });
        }else{
            curr_path = "user/"+username;
            $location.path(curr_path);
        }
    }
    
    $scope.getSongsOfSinger = function(){
        var songsIds = $scope.singer['songIds'];

        songs.getSongsIn(songsIds).success(function(data){
            console.log("get Songs Of Singer");
            console.log(data);
            $scope.songsOfSinger = data['data'];
            if($scope.songsOfSinger.length <=6){
                $scope.loadedSongs =$scope.songsOfSinger;
                $scope.currLoadedLength  = $scope.songsOfSinger.length;
            }else{
                $scope.currLoadedLength  = 6;
                $scope.loadedSongs = $scope.songsOfSinger.slice(0,6);
            }
        });
    }
    

    $scope.currLoadedLength = 0;
   
    $scope.toSongPage = function(curr){
        var singerIds = curr['artistIds'];
        var curr_path = "song/" + curr['_id'];
        $location.path(curr_path);
        
        
    }
    $scope.loadMoreSongs = function(){
        console.log("loadMoreSong");
        if(($scope.currLoadedLength+6) < $scope.songsOfSinger.length){
            console.log("situation 1");
            $scope.currLoadedLength = $scope.currLoadedLength+6;
            var temp = $scope.currLoadedLength;
            $scope.loadedSongs = $scope.songsOfSinger.slice(0,temp);
        }else if($scope.currLoadedLength >= $scope.songsOfSinger.length){
            console.log("situation 2");
            $("#more").css("display", "none");
        }else{
            console.log("situation 3");
            $scope.currLoadedLength =  $scope.songsOfSinger.length;
            $scope.loadedSongs = $scope.songsOfSinger;
            $("#more").css("display", "none");
        }
    }
    
    $scope.addAsFavorite = function() {
      //console.log('favorite artist');
      if($scope.user != undefined) {
        $scope.user.favArtistIds.push($scope.singerId);
        user.update($scope.user)
          .success(function(resp) {
            console.log('Successfully updated user');
          })
          .error(function(resp) {
            console.log(resp);
          });
        $scope.isFavorite = true;
      }
      else {
        console.log('User not logged in');
      }
    }
    $scope.removeFavorite = function() {
      //console.log('remove favorite');
      $scope.user.favArtistIds.splice($scope.user.favArtistIds.indexOf($scope.singerId), 1);
      user.update($scope.user)
        .success(function(resp) {
          console.log('Successfully updated user');
        })
        .error(function(resp) {
          console.log(resp);
        });
      $scope.isFavorite = false;
    }
}]);

mp4Controllers.controller('songController', ['$scope', '$http', 'artistsOfSong', 'songs', 'user', '$window', '$routeParams', '$cookieStore', '$location', 'signinRequest',  'artists', 
function($scope, $http, artistsOfSong, songs, user, $window, $routeParams, $cookieStore, $location, signinRequest,  artists) {
    //console.log("get here1");$scope.lyrics = "";
    $scope.initData = function(){
        var songid = $routeParams.id;
        songs.getOne(songid).success(function(data){
            $scope.isFavorite = false;
            $scope.song = data['data'];
            
            var userId = $cookieStore.get('userid');
            if(userId != undefined) {
              user.getOneById(userId)
                .success(function(resp){
                  $scope.user = resp.data;
                  if($scope.user.favSongIds.indexOf($scope.song._id) != -1)
                    $scope.isFavorite = true;
                })
                .error(function(resp){
                  console.log(resp);
                });
            }
            
            console.log(data);
            var lyrics = data['data']['lyrics'];
            $scope.fixlyrics(lyrics);
            var singerIds = $scope.song.artistIds;
            console.log(singerIds);
            artists.getArtistsIn(singerIds).success(function(data){
                console.log(data);
                $scope.singers = data['data'];  
            });
            var rhymesPerVerseChart = new Chart($("#rhymesPerVerseChart"), {
              type: 'line',
              data: {
                labels: Array.apply(null, {length:$scope.song.rhymesPerVerse.length}).map(Number.call, Number),
                datasets: [{
                    label: '# of rhymes',
                    data: $scope.song.rhymesPerVerse
                }]
              }
            });
            
            var rhymeDistributionChart = new Chart($('#rhymeDistributionChart'), {
              type: 'pie',
              data: {
                labels: [
                  "Monosyllabic",
                  "Multisyllabic",
                ],
                datasets: [
                  {
                      data: [$scope.song.rhymeDistribution, 1 - $scope.song.rhymeDistribution],
                      backgroundColor: [
                          "#FF6384",
                          "#36A2EB",
                      ],
                      hoverBackgroundColor: [
                          "#FF6384",
                          "#36A2EB",
                      ]
                  }]
              }
            });
        });
        
    }
    $scope.initData();
    $scope.fixlyrics = function(lyrics){
        if(lyrics !== undefined && lyrics !== null){
                
            $scope.lyrics = lyrics.split("\n,");
            //console.log($scope.lyrics);
        }
    }

    $scope.closeModal = function(){
    console.log("modal closed");
      $( ".modal1").slideUp( "slow", function() {
              // Animation complete.
          });
    }
    $scope.modal = function(){
          console.log("modal clicked");
            $( ".modal1").slideDown( "slow", function() {
                // Animation complete.

            });
      }
    $scope.toAccount = function(){
        username = $cookieStore.get('username');
        if(username == undefined || user== null){
            signinRequest.setData(true, function(){
                $location.path("/settings");
            });
        }else{
            curr_path = "user/"+username;
            $location.path(curr_path);
        }
    }
    $scope.escapeModal = function(){
        console.log("escapeModal");
        $(".modal2").css("display", "none");
    }
    $scope.displayModal = function(){
        console.log("displayModal");
        $(".modal2").css("display", "block");
    }
    $scope.showSidebar = function(){
        console.log("showSideBar");
        var $parent = $('nav');
          var navState = $parent.hasClass('open') ? "close" : "open";
            $parent.toggleClass('open');
            $parent.toggleClass('close');
         setTimeout(function(){
                console.log("timeout set");
                $('#menuToggle span').toggleClass("navClosed").toggleClass("navOpen");
        }, 200);
    }
    $scope.addFavorite = function() {
      $scope.user.favSongIds.push($scope.song._id);
      user.update($scope.user)
        .success(function(resp){
          console.log('Successfully updated user');
        })
        .error(function(resp){
          console.log(resp);
        });
      $scope.isFavorite = true;
    };
    $scope.removeFavorite = function() {
      $scope.user.favSongIds.splice($scope.user.favSongIds.indexOf($scope.song._id), 1);
      user.update($scope.user)
        .success(function(resp){
          console.log('Successfully updated user');
        })
        .error(function(resp){
          console.log(resp);
        });
      $scope.isFavorite = false;
    };
}]);

mp4Controllers.controller('userController', ['$scope', '$http','$location', '$routeParams', '$cookieStore', 'artists', 'songs', 'user', function($scope, $http, $location, $routeParams, $cookieStore,  artists, songs, user){

    $scope.name = $routeParams.name || 'unknown';
    $scope.singers = "";
    $scope.songs = "";
    $scope.singerLen = 0;
    $scope.songLen = 0;
    $scope.noSongs = false;
    $scope.noSingers = false;
    //$scope.aboutMe = "";
    
    
    if($cookieStore.get('userid') !== undefined && $cookieStore.get('userid') !== null){
        var userid = $cookieStore.get('userid');
        console.log(userid);
        user.getOneById(userid).success(function(data){
          $scope.user = data['data'];
          if($scope.user['thumbnailUrl'] === undefined || $scope.user['thumbnailUrl'] === "undefined")
                $scope.user['thumbnailUrl'] = "http://placehold.it/550x550";
          console.log("user:---------");
          console.log($scope.user);
          //$scope.aboutMe = data['data']['aboutMe'];
          $scope.getSingers();
          $scope.getSongs();
        }).error(function(resp){
            console.log(resp);
        });
    }
    
    $scope.getSingers = function(){
        
        var singerIds = $scope.user['favArtistIds'];
        if(singerIds !==undefined && singerIds.length !== 0){
            console.log("getSingers: "+ singerIds);
            artists.getArtistsIn(singerIds).success(function(data){
                console.log(data);
                $scope.singers = data['data'];
                $scope.singerLen = $scope.singers.length;
            
            });
        }else{
            $scope.noSingers = true;
        }
    }
    
    $scope.getSongs = function(){
        
        var songIds = $scope.user['favSongIds'];
        if(songIds !==undefined && songIds.length !== 0){
            console.log("getSongs: "+ songIds);
            songs.getSongsIn(songIds).success(function(data){
                console.log(data);
                $scope.songs = data['data'];
                $scope.songLen = $scope.songs.length;
            
            });
        }else{
            $scope.noSongs = true;
        }
    }
    
    $scope.$watch('name', function(newValue, oldValue){
      if(newValue == 'unknown' || newValue !== $cookieStore.get('username')){
          alert("Sorry... It's not a valid name");
          $location.path("/settings");
      }
  });
    
    $scope.closeModal = function(){
      console.log("modal closed");
        //$(".modal1").css("display", "none"); 
        $( ".modal1").slideUp( "slow", function() {
                // Animation complete.
                //$(".modal1").css("display", "none");
            });
      }
    $scope.modal = function(){
          console.log("modal clicked");
            $( ".modal1").slideDown( "slow", function() {
                // Animation complete.

            });
      }
    $scope.toAccount = function(){
        username = $cookieStore.get('username');
        if(username == undefined || user== null){
            signinRequest.setData(true, function(){
                $location.path("/settings");
            });
        }else{
            curr_path = "user/"+username;
            $location.path(curr_path);
        }
    }
    $scope.logout = function(){
        $cookieStore.remove('userid');
        $cookieStore.remove('username');

        $location.path("/settings");
    }

    $scope.toSingerPage = function(curr){
        //console.log("toSingerPage");
        //singerInfo.setData(curr);
        //console.log(singerInfo.getData());
        var curr_path = "singer/" + curr["_id"];
        $location.path(curr_path);
    }
     $scope.toSongPage = function(curr){
        var singerIds = curr['artistIds'];
        var curr_path = "song/" + curr['_id'];
        $location.path(curr_path);
        
    }
   
    $scope.modifyDescription = function(){
        $(".modal4").css("display", "block");
    }
    $scope.close = function(){
      console.log("modal closed");
        $(".modal4").css("display", "none"); 
    }
    $scope.updateUserDescription = function(){
      var userid = $cookieStore.get('userid');
      var text = $("textarea").val();
      console.log("updateUserDescription");
      console.log(text);
      $(".modal4").css("display", "none"); 
      if(text !== null && text !== undefined){
          user.update($scope.user)
            .success(function(resp) {
              console.log('Updated about me');
              $scope.user.aboutMe = text;
            })
            .error(function(resp) {
              console.log(resp);
            });
          /*
          user.updateAboutme(text, userid).success(function(data){
              console.log("updated");
              console.log(data['data']);
              $scope.aboutMe = text;
              console.log("aboutMe: " + $scope.aboutMe);
          });
          */
      }
    }

}]);

/*
mp4Controllers.controller('AddSongController', ['$scope', '$http', 'UserService', function($scope, $http, UserService){
  $scope.title = "";
  $scope.lyrics = "";
  $scope.artistId = "";
  $scope.albumId = "";

  function callback(data) {
    // For later use, like error message display.
    $scope.data = data;
  }
  
  $scope.submitSong = function() {
    UserService.post({
      title: $scope.title,
      lyrics: $scope.lyrics,
      artistId: $scope.artistId,
      albumId: $scope.albumId
    }, callback, callback);
  };
}]);
*/
