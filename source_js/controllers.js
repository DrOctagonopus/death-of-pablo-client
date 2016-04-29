var mp4Controllers = angular.module('mp4Controllers', ['ngRoute']);

mp4Controllers.controller('SettingsController', ['$scope' , '$window' , function($scope, $window) {
  $scope.url = $window.sessionStorage.baseurl;

  $scope.close = function(){
      console.log("modal closed");
        $(".modal1").css("display", "none"); 
  }
  $scope.modal = function(){
      console.log("modal clicked");
        $( ".modal1").slideDown( "slow", function() {
            // Animation complete.
            
        });
  }
  $scope.search = function(){
      
  }
  
  $scope.songs = [
        {
            "id": "1",
            "singerId": "1",
            "name": "song1",
            "details": "1Fusce non velit pretium, eleifend dolor at, faucibus ipsum. Fusce id ultrices urna, faucibus laoreet nunc. Phasellus id dui luctus mauris rhoncus maximus. Aliquam lacinia lacus efficitur tincidunt placerat. Mauris hendrerit leo at magna faucibus, quis commodo velit condimentum.",
            "year": 2011,
            "rank": 1,
            "cover": "http://placehold.it/550x550"
        },
        {
            "id": "2",
            "singerId": "3",
            "name": "song2",
            "details": "2Fusce non velit pretium, eleifend dolor at, faucibus ipsum. Fusce id ultrices urna, faucibus laoreet nunc. Phasellus id dui luctus mauris rhoncus maximus. Aliquam lacinia lacus efficitur tincidunt placerat. Mauris hendrerit leo at magna faucibus, quis commodo velit condimentum.",
            "year": 2012,
            "rank": 2,
            "cover": "http://placehold.it/550x550"
        },
        {
            "id": "3",
            "singerId": "2",
            "name": "song3",
            "details": "3Fusce non velit pretium, eleifend dolor at, faucibus ipsum. Fusce id ultrices urna, faucibus laoreet nunc. Phasellus id dui luctus mauris rhoncus maximus. Aliquam lacinia lacus efficitur tincidunt placerat. Mauris hendrerit leo at magna faucibus, quis commodo velit condimentum.",
            "year": 2009,
            "rank": 3,
            "cover": "http://placehold.it/550x550"
        },
        {
            "id": "4",
            "singerId": "4",
            "name": "song4",
            "details": "4Fusce non velit pretium, eleifend dolor at, faucibus ipsum. Fusce id ultrices urna, faucibus laoreet nunc. Phasellus id dui luctus mauris rhoncus maximus. Aliquam lacinia lacus efficitur tincidunt placerat. Mauris hendrerit leo at magna faucibus, quis commodo velit condimentum.",
            "year": 2008,
            "rank": 4,
            "cover": "http://placehold.it/550x550"
        },
        {
            "id": "5",
            "singerId": "5",
            "name": "song5",
            "details": "5Fusce non velit pretium, eleifend dolor at, faucibus ipsum. Fusce id ultrices urna, faucibus laoreet nunc. Phasellus id dui luctus mauris rhoncus maximus. Aliquam lacinia lacus efficitur tincidunt placerat. Mauris hendrerit leo at magna faucibus, quis commodo velit condimentum.",
            "year": 2007,
            "rank": 5,
            "cover": "http://placehold.it/550x550"
        },
        {
            "id": "6",
            "singerId": "6",
            "name": "song6",
            "details": "6Fusce non velit pretium, eleifend dolor at, faucibus ipsum. Fusce id ultrices urna, faucibus laoreet nunc. Phasellus id dui luctus mauris rhoncus maximus. Aliquam lacinia lacus efficitur tincidunt placerat. Mauris hendrerit leo at magna faucibus, quis commodo velit condimentum.",
            "year": 2011,
            "rank": 6,
            "cover": "http://placehold.it/550x550"
        },
        {
            "id": "7",
            "singerId": "1",
            "name": "song7",
            "details": "6Fusce non velit pretium, eleifend dolor at, faucibus ipsum. Fusce id ultrices urna, faucibus laoreet nunc. Phasellus id dui luctus mauris rhoncus maximus. Aliquam lacinia lacus efficitur tincidunt placerat. Mauris hendrerit leo at magna faucibus, quis commodo velit condimentum.",
            "year": 1995,
            "rank": 7,
            "cover": "http://placehold.it/550x550"
        },
        {
            "id": "8",
            "singerId": "2",
            "name": "song8",
            "details": "6Fusce non velit pretium, eleifend dolor at, faucibus ipsum. Fusce id ultrices urna, faucibus laoreet nunc. Phasellus id dui luctus mauris rhoncus maximus. Aliquam lacinia lacus efficitur tincidunt placerat. Mauris hendrerit leo at magna faucibus, quis commodo velit condimentum.",
            "year": 2009,
            "rank": 8,
            "cover": "http://placehold.it/550x550"
        },
        {
            "id": "9",
            "singerId": "5",
            "name": "song9",
            "details": "6Fusce non velit pretium, eleifend dolor at, faucibus ipsum. Fusce id ultrices urna, faucibus laoreet nunc. Phasellus id dui luctus mauris rhoncus maximus. Aliquam lacinia lacus efficitur tincidunt placerat. Mauris hendrerit leo at magna faucibus, quis commodo velit condimentum.",
            "year": 2011,
            "rank": 9,
            "cover": "http://placehold.it/550x550"
        },
        {
            "id": "10",
            "singerId": "9",
            "name": "song6",
            "details": "6Fusce non velit pretium, eleifend dolor at, faucibus ipsum. Fusce id ultrices urna, faucibus laoreet nunc. Phasellus id dui luctus mauris rhoncus maximus. Aliquam lacinia lacus efficitur tincidunt placerat. Mauris hendrerit leo at magna faucibus, quis commodo velit condimentum.",
            "year": 2011,
            "rank": 6,
            "cover": "http://placehold.it/550x550"
        },
        {
            "id": "11",
            "singerId": "8",
            "name": "song7",
            "details": "6Fusce non velit pretium, eleifend dolor at, faucibus ipsum. Fusce id ultrices urna, faucibus laoreet nunc. Phasellus id dui luctus mauris rhoncus maximus. Aliquam lacinia lacus efficitur tincidunt placerat. Mauris hendrerit leo at magna faucibus, quis commodo velit condimentum.",
            "year": 1995,
            "rank": 7,
            "cover": "http://placehold.it/550x550"
        },
        {
            "id": "12",
            "singerId": "5",
            "name": "song8",
            "details": "6Fusce non velit pretium, eleifend dolor at, faucibus ipsum. Fusce id ultrices urna, faucibus laoreet nunc. Phasellus id dui luctus mauris rhoncus maximus. Aliquam lacinia lacus efficitur tincidunt placerat. Mauris hendrerit leo at magna faucibus, quis commodo velit condimentum.",
            "year": 2009,
            "rank": 8,
            "cover": "http://placehold.it/550x550"
        },
        {
            "id": "13",
            "singerId": "2",
            "name": "song9",
            "details": "6Fusce non velit pretium, eleifend dolor at, faucibus ipsum. Fusce id ultrices urna, faucibus laoreet nunc. Phasellus id dui luctus mauris rhoncus maximus. Aliquam lacinia lacus efficitur tincidunt placerat. Mauris hendrerit leo at magna faucibus, quis commodo velit condimentum.",
            "year": 2011,
            "rank": 9,
            "cover": "http://placehold.it/550x550"
        },
        {
            "id": "14",
            "singerId": "9",
            "name": "song10",
            "details": "6Fusce non velit pretium, eleifend dolor at, faucibus ipsum. Fusce id ultrices urna, faucibus laoreet nunc. Phasellus id dui luctus mauris rhoncus maximus. Aliquam lacinia lacus efficitur tincidunt placerat. Mauris hendrerit leo at magna faucibus, quis commodo velit condimentum.",
            "year": 2011,
            "rank": 10,
            "cover": "http://placehold.it/550x550"
        } 
    ];

  $scope.ifrapper = true; 
  $scope.rappers = [
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
            
        },
        {
          "name": "rapper8",
            "id": 8,
            "description": "8Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed gravida elit. Maecenas ante erat, aliquet a viverra at, luctus at purus. Sed consectetur vehicula tincidunt. Vestibulum varius turpis sit amet egestas condimentum. Ut suscipit nulla et vehicula rutrum. Duis sodales nec elit vel iaculis. ",
            "photo": "http://placehold.it/550x550"
            
        },
        {
          "name": "rapper9",
            "id": 9,
            "description": "9Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed gravida elit. Maecenas ante erat, aliquet a viverra at, luctus at purus. Sed consectetur vehicula tincidunt. Vestibulum varius turpis sit amet egestas condimentum. Ut suscipit nulla et vehicula rutrum. Duis sodales nec elit vel iaculis. ",
            "photo": "http://placehold.it/550x550"
            
        },
        {
          "name": "rapper10",
            "id": 10,
            "description": "10Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed gravida elit. Maecenas ante erat, aliquet a viverra at, luctus at purus. Sed consectetur vehicula tincidunt. Vestibulum varius turpis sit amet egestas condimentum. Ut suscipit nulla et vehicula rutrum. Duis sodales nec elit vel iaculis. ",
            "photo": "http://placehold.it/550x550"
            
        }
    ];
   

  
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
  
  
  $scope.$watch('searchTerm', function displayList(newValue, oldValue){
     // console.log("get here");
     // console.log($scope.searchTerm);
      
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
      //console.log("closed");
      $("#searchList").css("display", "none");
      $("#searchbar").animate({
            marginTop: "-100px"
      });
  }
  $scope.span = function(){
       
      $("#searchbar").animate({
          marginTop: "0px"
      });
  }

}])
.filter('subText', function(){
    return function(text, phrase){
        var match = new RegExp('('+phrase+')', 'gi');
        if(match){
            console.log("match found at "+match.index);
        }
        return text;
    }
})
.filter('highlight', function($sce) {
    return function(text, phrase) {
      console.log(phrase);
        //console.log(text);
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


mp4Controllers.controller('galleryController', ['$scope', '$location', 'singerInfo', function($scope, $location, singerInfo) {
    $scope.singerList = [
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
            
        },
        {
          "name": "rapper8",
            "id": 8,
            "description": "8Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed gravida elit. Maecenas ante erat, aliquet a viverra at, luctus at purus. Sed consectetur vehicula tincidunt. Vestibulum varius turpis sit amet egestas condimentum. Ut suscipit nulla et vehicula rutrum. Duis sodales nec elit vel iaculis. ",
            "photo": "http://placehold.it/550x550"
            
        },
        {
          "name": "rapper9",
            "id": 9,
            "description": "9Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed gravida elit. Maecenas ante erat, aliquet a viverra at, luctus at purus. Sed consectetur vehicula tincidunt. Vestibulum varius turpis sit amet egestas condimentum. Ut suscipit nulla et vehicula rutrum. Duis sodales nec elit vel iaculis. ",
            "photo": "http://placehold.it/550x550"
            
        },
        {
          "name": "rapper10",
            "id": 10,
            "description": "10Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed gravida elit. Maecenas ante erat, aliquet a viverra at, luctus at purus. Sed consectetur vehicula tincidunt. Vestibulum varius turpis sit amet egestas condimentum. Ut suscipit nulla et vehicula rutrum. Duis sodales nec elit vel iaculis. ",
            "photo": "http://placehold.it/550x550"
            
        }
    ];
    $scope.curr = $scope.singerList[1];
    $scope.displayDetails = function(curr){
        $scope.curr = curr;
    }
    $scope.close = function(){
      console.log("modal closed");
        $(".modal1").css("display", "none"); 
      }
    $scope.modal = function(){
          console.log("modal clicked");
            $( ".modal1").slideDown( "slow", function() {
                // Animation complete.

            });
      }
    $scope.toSingerPage = function(curr){
        singerInfo.setData(curr);
        console.log(singerInfo.getData());
        var curr_path = "singer/" + curr.id;
        $location.path(curr_path);
    }

}]);

mp4Controllers.controller('singerController', ['$scope', 'singerInfo', 'songInfo', 'singerName', '$location', function($scope, singerInfo, songInfo,singerName, $location) {
    $scope.singer = singerInfo.getData();
    $scope.singerId = $scope.singer.id || "1";
    $scope.close = function(){
      console.log("modal closed");
        $(".modal1").css("display", "none"); 
      }
    $scope.modal = function(){
          console.log("modal clicked");
            $( ".modal1").slideDown( "slow", function() {
                // Animation complete.

            });
      }
    $scope.songsOfSinger = [
        {
            "id": "1",
            "singerId": "1",
            "name": "song1",
            "details": "1Fusce non velit pretium, eleifend dolor at, faucibus ipsum. Fusce id ultrices urna, faucibus laoreet nunc. Phasellus id dui luctus mauris rhoncus maximus. Aliquam lacinia lacus efficitur tincidunt placerat. Mauris hendrerit leo at magna faucibus, quis commodo velit condimentum.",
            "year": 2011,
            "rank": 1,
            "cover": "http://placehold.it/550x550"
        },
        {
            "id": "2",
            "singerId": "1",
            "name": "song2",
            "details": "2Fusce non velit pretium, eleifend dolor at, faucibus ipsum. Fusce id ultrices urna, faucibus laoreet nunc. Phasellus id dui luctus mauris rhoncus maximus. Aliquam lacinia lacus efficitur tincidunt placerat. Mauris hendrerit leo at magna faucibus, quis commodo velit condimentum.",
            "year": 2012,
            "rank": 2,
            "cover": "http://placehold.it/550x550"
        },
        {
            "id": "3",
            "singerId": "1",
            "name": "song3",
            "details": "3Fusce non velit pretium, eleifend dolor at, faucibus ipsum. Fusce id ultrices urna, faucibus laoreet nunc. Phasellus id dui luctus mauris rhoncus maximus. Aliquam lacinia lacus efficitur tincidunt placerat. Mauris hendrerit leo at magna faucibus, quis commodo velit condimentum.",
            "year": 2009,
            "rank": 3,
            "cover": "http://placehold.it/550x550"
        },
        {
            "id": "4",
            "singerId": "1",
            "name": "song4",
            "details": "4Fusce non velit pretium, eleifend dolor at, faucibus ipsum. Fusce id ultrices urna, faucibus laoreet nunc. Phasellus id dui luctus mauris rhoncus maximus. Aliquam lacinia lacus efficitur tincidunt placerat. Mauris hendrerit leo at magna faucibus, quis commodo velit condimentum.",
            "year": 2008,
            "rank": 4,
            "cover": "http://placehold.it/550x550"
        },
        {
            "id": "5",
            "singerId": "1",
            "name": "song5",
            "details": "5Fusce non velit pretium, eleifend dolor at, faucibus ipsum. Fusce id ultrices urna, faucibus laoreet nunc. Phasellus id dui luctus mauris rhoncus maximus. Aliquam lacinia lacus efficitur tincidunt placerat. Mauris hendrerit leo at magna faucibus, quis commodo velit condimentum.",
            "year": 2007,
            "rank": 5,
            "cover": "http://placehold.it/550x550"
        },
        {
            "id": "6",
            "singerId": "1",
            "name": "song6",
            "details": "6Fusce non velit pretium, eleifend dolor at, faucibus ipsum. Fusce id ultrices urna, faucibus laoreet nunc. Phasellus id dui luctus mauris rhoncus maximus. Aliquam lacinia lacus efficitur tincidunt placerat. Mauris hendrerit leo at magna faucibus, quis commodo velit condimentum.",
            "year": 2011,
            "rank": 6,
            "cover": "http://placehold.it/550x550"
        },
        {
            "id": "7",
            "singerId": "1",
            "name": "song7",
            "details": "6Fusce non velit pretium, eleifend dolor at, faucibus ipsum. Fusce id ultrices urna, faucibus laoreet nunc. Phasellus id dui luctus mauris rhoncus maximus. Aliquam lacinia lacus efficitur tincidunt placerat. Mauris hendrerit leo at magna faucibus, quis commodo velit condimentum.",
            "year": 1995,
            "rank": 7,
            "cover": "http://placehold.it/550x550"
        },
        {
            "id": "8",
            "singerId": "1",
            "name": "song8",
            "details": "6Fusce non velit pretium, eleifend dolor at, faucibus ipsum. Fusce id ultrices urna, faucibus laoreet nunc. Phasellus id dui luctus mauris rhoncus maximus. Aliquam lacinia lacus efficitur tincidunt placerat. Mauris hendrerit leo at magna faucibus, quis commodo velit condimentum.",
            "year": 2009,
            "rank": 8,
            "cover": "http://placehold.it/550x550"
        },
        {
            "id": "9",
            "singerId": "1",
            "name": "song9",
            "details": "6Fusce non velit pretium, eleifend dolor at, faucibus ipsum. Fusce id ultrices urna, faucibus laoreet nunc. Phasellus id dui luctus mauris rhoncus maximus. Aliquam lacinia lacus efficitur tincidunt placerat. Mauris hendrerit leo at magna faucibus, quis commodo velit condimentum.",
            "year": 2011,
            "rank": 9,
            "cover": "http://placehold.it/550x550"
        },
        {
            "id": "10",
            "singerId": "1",
            "name": "song6",
            "details": "6Fusce non velit pretium, eleifend dolor at, faucibus ipsum. Fusce id ultrices urna, faucibus laoreet nunc. Phasellus id dui luctus mauris rhoncus maximus. Aliquam lacinia lacus efficitur tincidunt placerat. Mauris hendrerit leo at magna faucibus, quis commodo velit condimentum.",
            "year": 2011,
            "rank": 6,
            "cover": "http://placehold.it/550x550"
        },
        {
            "id": "11",
            "singerId": "1",
            "name": "song7",
            "details": "6Fusce non velit pretium, eleifend dolor at, faucibus ipsum. Fusce id ultrices urna, faucibus laoreet nunc. Phasellus id dui luctus mauris rhoncus maximus. Aliquam lacinia lacus efficitur tincidunt placerat. Mauris hendrerit leo at magna faucibus, quis commodo velit condimentum.",
            "year": 1995,
            "rank": 7,
            "cover": "http://placehold.it/550x550"
        },
        {
            "id": "12",
            "singerId": "1",
            "name": "song8",
            "details": "6Fusce non velit pretium, eleifend dolor at, faucibus ipsum. Fusce id ultrices urna, faucibus laoreet nunc. Phasellus id dui luctus mauris rhoncus maximus. Aliquam lacinia lacus efficitur tincidunt placerat. Mauris hendrerit leo at magna faucibus, quis commodo velit condimentum.",
            "year": 2009,
            "rank": 8,
            "cover": "http://placehold.it/550x550"
        },
        {
            "id": "13",
            "singerId": "1",
            "name": "song9",
            "details": "6Fusce non velit pretium, eleifend dolor at, faucibus ipsum. Fusce id ultrices urna, faucibus laoreet nunc. Phasellus id dui luctus mauris rhoncus maximus. Aliquam lacinia lacus efficitur tincidunt placerat. Mauris hendrerit leo at magna faucibus, quis commodo velit condimentum.",
            "year": 2011,
            "rank": 9,
            "cover": "http://placehold.it/550x550"
        },
        {
            "id": "14",
            "singerId": "1",
            "name": "song10",
            "details": "6Fusce non velit pretium, eleifend dolor at, faucibus ipsum. Fusce id ultrices urna, faucibus laoreet nunc. Phasellus id dui luctus mauris rhoncus maximus. Aliquam lacinia lacus efficitur tincidunt placerat. Mauris hendrerit leo at magna faucibus, quis commodo velit condimentum.",
            "year": 2011,
            "rank": 10,
            "cover": "http://placehold.it/550x550"
        } 
    ];
    $scope.currLoadedLength = 0;
    $scope.toSongPage = function(curr){
        songInfo.setData(curr);
        singerName.setData($scope.singer.name);
        console.log(songInfo.getData());
        var curr_path = "song/" + curr.id;
        $location.path(curr_path);
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
    if($scope.songsOfSinger.length <=6){
        $scope.loadedSongs =$scope.songsOfSinger;
        $scope.currLoadedLength  = $scope.songsOfSinger.length;
    }else{
        $scope.currLoadedLength  = 6;
        $scope.loadedSongs = $scope.songsOfSinger.slice(0,5);
    }

}]);


mp4Controllers.controller('songController', ['$scope', '$http', 'singerName', 'songInfo', '$window' , function($scope, $http, singerName,  songInfo, $window) {
    console.log("get here1");
    $scope.song = songInfo.getData();
    $scope.singerName = singerName.getData();
    $scope.close = function(){
      console.log("modal closed");
        $(".modal1").css("display", "none"); 
      }
    $scope.modal = function(){
          console.log("modal clicked");
            $( ".modal1").slideDown( "slow", function() {
                // Animation complete.

            });
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

mp4Controllers.controller('userController', ['$scope', '$http','$location', 'singerInfo', function($scope, $http, $location, singerInfo){
    
    $scope.close = function(){
      console.log("modal closed");
        $(".modal1").css("display", "none"); 
      }
    $scope.modal = function(){
          console.log("modal clicked");
            $( ".modal1").slideDown( "slow", function() {
                // Animation complete.

            });
      }
    //faked user and insgers
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
    $scope.user = {
      "id": "1",
      "name": "user1",
      "description": "1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed gravida elit. Maecenas ante erat, aliquet a viverra at, luctus at purus. Sed consectetur vehicula tincidunt. Vestibulum varius turpis sit amet egestas condimentum. Ut suscipit nulla et vehicula rutrum. Duis sodales nec elit vel iaculis.",
      "avoriteSingers": "7",    
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