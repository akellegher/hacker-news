'use strict';

HackerNews.controller('StoriesController', ['storiesAPI', '$window', function(storiesAPI, $window){
    var sc = this;

    // Return story Ids from the stories API service
    sc.storyIds = storiesAPI;

    // Limit the initial list of stories to 30
    sc.postsLimit = 30;

    // Increase limit to show more stories
    sc.loadMore = function() {
        sc.postsLimit += 30;
    }
}]);