'use strict';

HackerNews.controller('ItemController', ['$scope', '$stateParams', '$location', 'StoryService', function($scope, $stateParams, $location, StoryService){
    var item = this;

    item.itemId = ($scope.$parent.item ? $scope.$parent.item : $stateParams.itemId);

    // Return the story data from the getStory() method of the story service
    StoryService.getStory(item.itemId).then(function(response){
        item.data = response;
    }, function(error){
        console.log(error);
    });

    // Watch for changes to url
    $scope.$watch(function () {
        item.url = $location.url();
    });
}]);