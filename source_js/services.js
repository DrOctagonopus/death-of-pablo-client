var mp4Services = angular.module('mp4Services', []);

mp4Services.factory('formDisplay', function(){
    return{
        hideAndShow: function(formHide, formShow){
            console.log(formHide + ", "+formShow);
            if(formHide !== null && formHide !== undefined)
                $(formHide).css('display', 'none');
            if(formShow !== null && formShow !== undefined)
                $(formShow).css('display', 'block');
        }
    }
});

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

<<<<<<< HEAD
mp4Services.factory('signinRequest', function(){
    var signinRequest = false;
    return{
        getData : function(){
            return signinRequest;
        },
        setData : function(newData, callback){
            signinRequest= newData;
            callback();
        }
    }
});

mp4Services.factory('Llamas', function($http, $window) {
=======
mp4Services.factory('UserService', ['$http', '$window', function($http, $window){
>>>>>>> bab238b1049e3af16bf5443760398648a3b941e3
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
