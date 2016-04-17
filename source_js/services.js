var mp4Services = angular.module('mp4Services', []);

mp4Services.factory('singerName', function(){
    var name = "";
    return{
        getData : function(){
            return name;
        },
        setData : function(newData){
            name = newData;
        }
    }
});


mp4Services.factory('singerInfo', function(){
    var singer = "";
    return{
        getData : function(){
            return singer;
        },
        setData : function(newData){
            singer = newData;
        }
    }
});

mp4Services.factory('songInfo', function(){
    var song = "";
    return{
        getData : function(){
            return song;
        },
        setData : function(newData){
            song = newData;
        }
    }
});

mp4Services.factory('Llamas', function($http, $window) {
    return {
        get : function() {
            var baseUrl = $window.sessionStorage.baseurl;
            return $http.get(baseUrl+'/api/llamas');
        }
    }
});
