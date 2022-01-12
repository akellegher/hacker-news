'use strict';

HackerNews.factory('StoryService', ['$resource', function($resource){
    // Define the resources for the API 
    var storiesRes = $resource('https://hacker-news.firebaseio.com/v0/:id.json', {id: '@id'}, {query: {method: 'GET', params: {}, isArray: true, cache: true}});
    var storyRes = $resource('https://hacker-news.firebaseio.com/v0/item/:itemId.json', {itemId: '@itemId'}, {query: {method: 'GET', params: {}, isArray: true, cache: true}});
    var storyIds;
    var storyObj;
    return {
        // Return all stories based on the story type selected; the response is an array
        getStories: function(type){
            return storiesRes.query({id: type}).$promise.then(function(response){
                storyIds = response;
                return storyIds;
            }, function(error){
                console.log(error);
            });
        },
        // Return the individual story data; the response is an object
        getStory: function(itemId){
            return storyRes.get({itemId: itemId}).$promise.then(function(response){
                storyObj = response;
                return storyObj;
            }, function(error){
                console.log(error);
            });
        }
    }
}]);