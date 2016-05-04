myApp.factory("DataService", ["$http", function($http){
    var data = {};
    var entry = {};
    var exercise = {};
    var user = {};
    var diaryCount = {};
    var vocCount = {};
    var exeCount = {};
    var publish = {};

    var getUser = function (){
      $http.get("/user/name").then(function(response){
          console.log(response.data);
          user.response = response.data;

      });
    };

    var postVocabulary = function(data){
        data.userID = user.response.id;
        $http.post("/data/voc", data).then(function(response){
            console.log("Vocabulary SAVED! ", response);
            getVocabulary();
        });
    };

    var getVocabulary = function(){
        $http.get("/data/voc/"+ user.response.id).then(function(response){
            console.log(response.data);
            data.response = response.data;
            vocCount.response = data.response.length;
        });
    };

    var deleteVocData = function(data){
        $http.delete("/data/voc/"+data._id).then(function(response){
        console.log(data);
        console.log(response.data);
        getVocabulary();
    });
  };

    var postDiary = function(data){
        data.userID = user.response.id;
        $http.post("/data/diary", data).then(function(response){
            console.log("diary SAVED! ", response);
            getDiary();
        });
    };
    var getDiary = function(){
        $http.get("/data/diary/" + user.response.id).then(function(response){
            console.log(response.data);
            entry.response = response.data;
            diaryCount.response = entry.response.length;
        });
    };

    var deleteDiaryData = function(data){
        $http.delete("/data/diary/"+data._id).then(function(response){
        console.log(data);
        console.log(response.data);
        getDiary();
    });
  };

    var postExercise = function(data){
        data.userID = user.response.id;
        $http.post("/data/exercise", data).then(function(response){
            console.log("exercise SAVED! ", response);
            getExercise();
        });
    };

    var getExercise = function(){
        $http.get("/data/exercise/"+ user.response.id).then(function(response){
            console.log(response.data);
            exercise.response = response.data;
            exeCount.response = exercise.response.length;
        });
    };

    var deleteExerciseData = function(data){
        $http.delete("/data/exercise/"+data._id).then(function(response){
          console.log(data);
          console.log(response.data);
          getExercise();
      });
    };

    var postPublish = function(data){
        data.status = "public";
        data.name = user.response.firstname;
        data.time = Date.now;
        $http.post("/data/public", data).then(function(response){
            console.log("publish SAVED! ", response);
            getPublish();
        });
    };

    var getPublish = function(){
        $http.get("/data/public").then(function(response){
            console.log(response.data);
            publish.response = response.data;

        });
    };

    var deletePublishData = function(data){
      // if(publish.response.user === user.response.id ){
        $http.delete("/data/public/"+data._id).then(function(response){
        console.log(data);
        console.log(response.data);
        getPublish();

    });
  // }
  };

    getUser();

    return {
        data : data,
        entry: entry,
        exercise: exercise,
        user: user,
        postVocabulary : postVocabulary,
        getVocabulary : getVocabulary,
        postDiary: postDiary,
        getDiary: getDiary,
        postExercise: postExercise,
        getExercise: getExercise,
        deleteVocData: deleteVocData,
        deleteExerciseData: deleteExerciseData,
        deleteDiaryData: deleteDiaryData,
        getPublish : getPublish,
        postPublish : postPublish,
        deletePublishData : deletePublishData,
        diaryCount : diaryCount,
        vocCount : vocCount,
        exeCount : exeCount,
        publish : publish

    };
}]);
