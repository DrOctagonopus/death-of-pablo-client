var mp4Services = angular.module('mp4Services', []);
var baseUrl = "http://localhost:4000";
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
mp4Services.factory('artistsOfSong', function(){
    var artists = "";
    return{
        getData : function(){
            return artists;
        },
        setData : function(newData, callback){
            artists = newData;
            callback();
        }
    }
});
mp4Services.factory('singerInfo', function(){
    var singer = "";
    return{
        getData : function(){
            return singer;
        },
        setData : function(newData, callback){
            singer = newData;
            callback();
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

mp4Services.factory('allArtists', function(){
    var artists = "";
    return{
        getData : function(){
            return artists;
        },
        setData : function(newData, callback){
            artists = newData;
            callback();
        }
    }
});
mp4Services.factory('allSongs', function(){
    var songs = "";
    return{
        getData : function(){
            return songs;
        },
        setData : function(newData, callback){
            songs = newData;
            callback();
        }
    }
});

mp4Services.factory('artists', function($http, $window) {
    return{
        get: function(){
            return $http.get(baseUrl+'/api/artists');
        },
        getOne: function(id){
            return $http.get(baseUrl+'/api/artists'+id);
        },
        getArtistsIn: function(arrayOfIds){
            //var curr = baseUrl+'/api/songs?where={"_id":{"$in":'+arrayOfIds+'}}';
            //params: {_id: {$in: arrayofIds}}
            var url = baseUrl +'/api/artists';
            console.log(arrayOfIds);
            return $http({
                method: 'GET', 
                url: url,
                params: {_id: {$in: arrayOfIds}}
            });
        }
    };
});


//title, lyrics, artistIds, rank, score, rapDensity, rhymesPerVerse, vocabLevel

mp4Services.factory('songs', function($http, $window){
    return{
        get: function(){
            return $http.get(baseUrl+'/api/songs');
        },
        getOne: function(id){
            return $http.get(baseUrl+'/api/songs'+id);
        },
        getSongsIn: function(arrayOfIds){
            //var curr = baseUrl+'/api/songs?where={"_id":{"$in":'+arrayOfIds+'}}';
            //params: {_id: {$in: arrayofIds}}
            var url = baseUrl +'/api/songs';
            console.log(arrayOfIds);
            return $http({
                method: 'GET', 
                url: url,
                params: {where:{_id: {$in: arrayOfIds}}}
            });
        }
    };
});


//username, password, favSongIds, favArtistIds, aboutMe, thumbnailUrl

mp4Services.factory('user', function($http, $window){
    return{
        getOneById: function(id){
            return $http.get(baseUrl+'/api/user/'+id);
        },
        register: function(name, password, thumbnailUrl){
            console.log("name:" + name);
            console.log("password:" + password);
            //console.log("thumbnailUrl" + String(thumbnailUrl));
            var thumbnail = String(thumbnailUrl);
            return $http.post(baseUrl+'/api/user',{
                username: name,
                password: password,
                thumbnailUrl: thumbnail
            });
        },
        login: function(name, password){
            url = baseUrl+'/api/user';
            return $http({
                method: 'GET', 
                url: url,
                params: {username: name, password: password}
            });
        },
        updateAboutme: function(aboutMe, id){
            console.log(aboutMe);
            var curr = baseUrl+'/api/user/'+id;
            return $http.put(curr, {
                aboutMe: aboutMe
            });
        }
    };
});





