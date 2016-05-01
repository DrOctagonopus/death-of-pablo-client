var mp4Services = angular.module('mp4Services', []);

//for front-end
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


//for communicate with backend

mp4Services.factory('UserService', function($http, $window){
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
});

mp4Services.factory('artists', function($http, $window) {
    return{
        get: function(){
            return $http.get('/api/artists');
        },
        getOne: function(){
            return $http.get('/api/artists'+id);
        }
    };
});

mp4Services.factory('songs', function($http, $window){
    return{
        get: function(){
            return $http.get('/api/songs');
        },
        getOne: function(id){
            return $http.get('/api/songs'+id);
        }
    };
});

mp4Services.factory('user', function($http, $window){
    return{
        getOneById: function(id){
            return $http.get('/api/user'+id);
        }
    };
});



    
   /* mp4Services.factory('Llamas', function($http, $window) {
    return {
        get : function() {
            var baseUrl = $window.sessionStorage.baseurl;
            return $http.get(baseUrl+'/api/users');
        },
        getOneUser: function(id){
            var baseUrl = $window.sessionStorage.baseurl;
            return $http.get(baseUrl+'/api/users/'+id);
        },
        postNewUser: function(myname, myemail){
            var baseUrl = $window.sessionStorage.baseurl;
            return $http.post(baseUrl+'/api/users', {
                name: myname,
                email: myemail
            });
        },
        deleteUser: function(id){
            var baseUrl = $window.sessionStorage.baseurl;
            return $http.delete(baseUrl+'/api/users/'+id);
        },
         modifyTask: function(id, email, name, dateCreated, pendingTasks){
             var baseUrl = $window.sessionStorage.baseurl;
             var curr = baseUrl+'/api/users/'+id;
             return $http.put(curr, {
                name: name,
                email: email,
                dateCreated: dateCreated,
                pendingTasks: pendingTasks
            });
        }
        
    }
});*/