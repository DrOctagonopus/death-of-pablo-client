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

mp4Services.factory('UserService', ['$http', '$window', function($http, $window){
    return {
        post : function(req, callback, err) {
            return $http.post("/user/", req).
            then(function(resp) {
                callback(resp.data);
            }, function(resp) {
                err(resp.data);
            });
        }
    };
}])