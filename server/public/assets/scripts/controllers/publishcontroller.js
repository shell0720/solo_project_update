myApp.controller("PublishController", ["$scope", "DataService", function($scope, DataService){
    $scope.commentArray = [];
    DataService.getPublish();
    $scope.publishEntered = DataService.publish;

    $scope.deletePublish = function(data){
      for (var i = 0; i <DataService.publish.response.length; i ++){
      if (DataService.publish.response[i].user === DataService.user.response.id) {
       console.log(DataService.user.response.firstname);
       console.log(DataService.publish.response);
       console.log("meow");
        DataService.deletePublishData(data);
     }
   }

    };

}]);
