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

mp4Controllers.controller('SettingsController', ['$scope' , '$window', '$location', '$cookieStore', 'formDisplay', 'signinRequest', 'artists', 'songs', 'allArtists', 'allSongs', 'singerInfo', 'songInfo', function($scope, $window, $location, $cookieStore, formDisplay, signinRequest, artists, songs, allArtists, allSongs, singerInfo, songInfo) {
  var ifmodal = false; //click account in modal
  $scope.url = $window.sessionStorage.baseurl;
    $scope.songs = [];
    $scope.rappers = [];
  $scope.toGallery = function(){
      artists.get().success(function(data){ 
          allArtists.setData(data['data'], function(){
              //console.log("finish setting allArtists");
              //console.log(allArtists.getData());
              $location.path("/gallery");
          });
      });
  }
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
      if($cookieStore.get('id') === undefined || $cookieStore.get('id') === null)
         formDisplay.hideAndShow(null, '#register');
      else{
          curr_path = "user/"+$cookieStore.get('name');
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
      //step1: get
  }
  
  $scope.loginUser = function(){
      console.log("loginUser");
      $cookieStore.put('id','1234');
      $cookieStore.put('name', 'Lisa');
      $cookieStore.put('email', $scope.login_email);
      console.log($cookieStore.get('email'));
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
        songInfo.setData(curr);
        var singerIds = curr['artistIds'];
        console.log(singerIds);
        artists.getArtistsIn(singerIds).success(function(data){
            console.log(data);
            artistsOfSong.setData(data['data'], function(){
                console.log(artistsOfSong.getData());
                var curr_path = "song/" + curr['_id'];
                $location.path(curr_path);
            });
            
        });
        
    }
  $scope.toSingerPage = function(curr){
        singerInfo.setData(curr, function(){
            console.log(singerInfo.getData());
            var curr_path = "singer/" + curr['_id'];
            $location.path(curr_path);
        });   
        
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


mp4Controllers.controller('galleryController', ['$scope', '$location',  '$cookieStore', 'singerInfo', 'signinRequest', 'allArtists', 'artists', function($scope, $location, $cookieStore, singerInfo, signinRequest, allArtists, artists) {
    $scope.toGallery = function(){
      artists.get().success(function(data){ 
          allArtists.setData(data['data'], function(){
              //console.log("finish setting allArtists");
              //console.log(allArtists.getData());
              $location.path("/gallery");
          });
      });
  }
    $scope.singerList = allArtists.getData();
    console.log(allArtists.getData());
    $scope.curr = $scope.singerList[1];
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
        singerInfo.setData(curr, function(){
            console.log(singerInfo.getData());
            var curr_path = "singer/" + curr['_id'];
            $location.path(curr_path);
        });
        
        
        
    }
    $scope.toAccount = function(){
        id = $cookieStore.get('id');
        if(id == undefined){
            signinRequest.setData(true, function(){
                $location.path("/settings");
            });
        }else{
            curr_path = "user/"+$cookieStore.get('name');
            $location.path(curr_path);
        }
    }

}]);

mp4Controllers.controller('singerController', ['$scope', 'singerInfo', 'songInfo', 'artistsOfSong', '$location', '$cookieStore', 'signinRequest', 'songs', 'artists', 'allArtists', function($scope, singerInfo, songInfo,artistsOfSong, $location, $cookieStore, signinRequest, songs, artists, allArtists) {
    $scope.toGallery = function(){
      artists.get().success(function(data){ 
          allArtists.setData(data['data'], function(){
              //console.log("finish setting allArtists");
              //console.log(allArtists.getData());
              $location.path("/gallery");
          });
      });
  }
    $scope.singer = singerInfo.getData();
    console.log("in singer page");
    console.log($scope.singer);
    $scope.singerId = $scope.singer['_id'] || "1";
    $scope.getSongsOfSinger = [];
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
        id = $cookieStore.get('id');
        if(id == undefined){
            signinRequest.setData(true, function(){
                $location.path("/settings");
            });
        }else{
            curr_path = "user/"+$cookieStore.get('name');
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
                $scope.loadedSongs = $scope.songsOfSinger.slice(0,5);
            }
        });
    }
    $scope.getSongsOfSinger();

    $scope.currLoadedLength = 0;
   
    $scope.toSongPage = function(curr){
        songInfo.setData(curr);
        var singerIds = curr['artistIds'];
        console.log(singerIds);
        artists.getArtistsIn(singerIds).success(function(data){
            console.log(data);
            artistsOfSong.setData(data['data'], function(){
                console.log(artistsOfSong.getData());
                var curr_path = "song/" + curr['_id'];
                $location.path(curr_path);
            });
            
        });
        
    }
    $scope.loadMoreSongs = function(){
        console.log("loadMoreSong");
        if(($scope.currLoadedLength+6) < $scope.songsOfSinger.length){
            console.log("situation 1");
            $scope.currLoadedLength = $scope.currLoadedLength+6;
            var temp = $scope.currLoadedLength-1;
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
        console.log('favorite artist');
    }
}]);


mp4Controllers.controller('songController', ['$scope', '$http', 'artistsOfSong', 'songInfo', '$window', '$cookieStore', '$location', 'signinRequest', 'allArtists', 'artists', function($scope, $http, artistsOfSong,  songInfo, $window, $cookieStore, $location, signinRequest, allArtists, artists) {
    
    $scope.toGallery = function(){
      artists.get().success(function(data){ 
          allArtists.setData(data['data'], function(){
              //console.log("finish setting allArtists");
              //console.log(allArtists.getData());
              $location.path("/gallery");
          });
      });
  }
    console.log("get here1");
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3]
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
    console.log(myChart);
    $scope.song = songInfo.getData();
    console.log($scope.song);
    $scope.singers = artistsOfSong.getData();
    //$scope.singerNames = "";
    /*$scope.getSingerNames = function(){
        var data = artistsOfSong.getData();
        if(data !== undefined){
            for(var i=0; i<data.length; i++){
                $scope.singerNames = $scope.singerNames + ", "+data[i]['name'];
            }
        }
    }*/
    //$scope.getSingerNames();
    //console.log($scope.singerNames);
    
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
        id = $cookieStore.get('id');
        if(id == undefined){
            signinRequest.setData(true, function(){
                $location.path("/settings");
            });
        }else{
            curr_path = "user/"+$cookieStore.get('name');
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
          //$parent.toggleClass("open").toggleClass("close");
          var navState = $parent.hasClass('open') ? "close" : "open";
            $parent.toggleClass('open');
            $parent.toggleClass('close');
            //console.log('navState: ' +navState);
          //$(this).attr("title", navState + " navigation");
                // Set the timeout to the animation length in the CSS.
         setTimeout(function(){
                console.log("timeout set");
                $('#menuToggle span').toggleClass("navClosed").toggleClass("navOpen");
        }, 200);
    }

}]);

mp4Controllers.controller('userController', ['$scope', '$http','$location', '$routeParams', '$cookieStore', 'singerInfo', 'artists', 'allArtists', function($scope, $http, $location, $routeParams, $cookieStore, singerInfo, artists, allArtists){
   $scope.toGallery = function(){
      artists.get().success(function(data){ 
          allArtists.setData(data['data'], function(){
              //console.log("finish setting allArtists");
              //console.log(allArtists.getData());
              $location.path("/gallery");
          });
      });
  }
    $scope.name = $routeParams.name || 'unknown';
    
    $scope.$watch('name', function(newValue, oldValue){
      if(newValue == 'unknown' || newValue !== $cookieStore.get('name')){
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
        id = $cookieStore.get('id');
        if(id == undefined){
            signinRequest.setData(true, function(){
                $location.path("/settings");
            });
        }else{
            $scope.closeModal();
        }
    }
    $scope.logout = function(){
        $cookieStore.remove('id');
        $cookieStore.remove('email');
        $cookieStore.remove('name');
        $location.path("/settings");
    }
    //faked user and insgers
    //name, songIds, description
    $scope.singers = [
        {
          "name": "rapper1",
            "id": 1,
            "description": "1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed gravida elit. Maecenas ante erat, aliquet a viverra at, luctus at purus. Sed consectetur vehicula tincidunt. Vestibulum varius turpis sit amet egestas condimentum. Ut suscipit nulla et vehicula rutrum. Duis sodales nec elit vel iaculis. ",
            "photo": "http://placehold.it/550x550"
            
        },
        {
          "name": "rapper2",
            "id": 2,
            "description": "2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed gravida elit. Maecenas ante erat, aliquet a viverra at, luctus at purus. Sed consectetur vehicula tincidunt. Vestibulum varius turpis sit amet egestas condimentum. Ut suscipit nulla et vehicula rutrum. Duis sodales nec elit vel iaculis. ",
            "photo": "http://placehold.it/550x550"
            
        },
        {
          "name": "rapper3",
            "id": 3,
            "description": "3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed gravida elit. Maecenas ante erat, aliquet a viverra at, luctus at purus. Sed consectetur vehicula tincidunt. Vestibulum varius turpis sit amet egestas condimentum. Ut suscipit nulla et vehicula rutrum. Duis sodales nec elit vel iaculis. ",
            "photo": "http://placehold.it/550x550"
            
        },
        {
          "name": "rapper4",
            "id": 4,
            "description": "4Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed gravida elit. Maecenas ante erat, aliquet a viverra at, luctus at purus. Sed consectetur vehicula tincidunt. Vestibulum varius turpis sit amet egestas condimentum. Ut suscipit nulla et vehicula rutrum. Duis sodales nec elit vel iaculis. ",
            "photo": "http://placehold.it/550x550"
            
        },
        {
          "name": "rapper5",
            "id": 5,
            "description": "5Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed gravida elit. Maecenas ante erat, aliquet a viverra at, luctus at purus. Sed consectetur vehicula tincidunt. Vestibulum varius turpis sit amet egestas condimentum. Ut suscipit nulla et vehicula rutrum. Duis sodales nec elit vel iaculis. ",
            "photo": "http://placehold.it/550x550"
            
        },
        {
          "name": "rapper6",
            "id": 6,
            "description": "6Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed gravida elit. Maecenas ante erat, aliquet a viverra at, luctus at purus. Sed consectetur vehicula tincidunt. Vestibulum varius turpis sit amet egestas condimentum. Ut suscipit nulla et vehicula rutrum. Duis sodales nec elit vel iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed gravida elit. Maecenas ante erat, aliquet a viverra at, luctus at purus. Sed consectetur vehicula tincidunt. Vestibulum varius turpis sit amet egestas condimentum. Ut suscipit nulla et vehicula rutrum. Duis sodales nec elit vel iaculis. ",
            "photo": "http://placehold.it/550x550"
            
        },
        {
            "name": "rapper7",
            "id": 7,
            "description": "7Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed gravida elit. Maecenas ante erat, aliquet a viverra at, luctus at purus. Sed consectetur vehicula tincidunt. Vestibulum varius turpis sit amet egestas condimentum. Ut suscipit nulla et vehicula rutrum. Duis sodales nec elit vel iaculis. ",
            "photo": "http://placehold.it/550x550"
            
        }
    ];
    //username, passwordHash, favSongIds, favArtistIds,aboutMe, thumbnailUrl
    $scope.user = {
      "id": "1",
      "name": "user1",
      "description": "1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed gravida elit. Maecenas ante erat, aliquet a viverra at, luctus at purus. Sed consectetur vehicula tincidunt. Vestibulum varius turpis sit amet egestas condimentum. Ut suscipit nulla et vehicula rutrum. Duis sodales nec elit vel iaculis.",
      "favoriteSingers": "7",    
      "profile": "http://placehold.it/550x550"
    };
    $scope.toSingerPage = function(curr){
        console.log("toSingerPage");
        singerInfo.setData(curr);
        console.log(singerInfo.getData());
        var curr_path = "singer/" + curr.id;
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
      var text = $("textarea").val();
      console.log(text);
      $(".modal4").css("display", "none"); 
      if(text !== null && text !== undefined){
          $scope.user.description = text;
      }
    }

}]);

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
