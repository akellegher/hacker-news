'use strict';

HackerNews.directive('storyItem', [function(){
    return{
        templateUrl: 'templates/stories.item.html',
        controller: 'ItemController',
        controllerAs: 'item',
        restrict: 'E',
        scope: {
            itemId: '='
        }
    }
}]);