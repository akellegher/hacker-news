'use strict';

HackerNews.config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function($urlRouterProvider, $stateProvider, $locationProvider){
    // Get rid of the '!' in the url
    $locationProvider.hashPrefix('');

    // App defaults to homepage when it does not recognise the following URLs
    // /newest, /ask, /show, /jobs
    // The remaining pages are out of scope for this project
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'templates/stories.html',
        controller: 'StoriesController',
        controllerAs: 'sc',
        resolve: {
            // The top stories will get returned by default, or when the user navigates to the home screen
            // As per the project spec, comments are out of scope
            storiesAPI: ['StoryService', function(StoryService){
                return StoryService.getStories('topstories').then(function(response){
                    return response;
                }, function(error){
                    console.log(error);
                });
            }]
        }
    })
    .state('new', {
        url: '/newest',
        templateUrl: 'templates/stories.html',
        controller: 'StoriesController',
        controllerAs: 'sc',
        resolve: {
            storiesAPI: ['StoryService', function(StoryService){
                return StoryService.getStories('newstories').then(function(response){
                    return response;
                }, function(error){
                    console.log(error);
                });
            }]
        }
    })
    .state('ask', {
        url: '/ask',
        templateUrl: 'templates/stories.html',
        controller: 'StoriesController',
        controllerAs: 'sc',
        resolve: {
            storiesAPI: ['StoryService', function(StoryService){
                return StoryService.getStories('askstories').then(function(response){
                    return response;
                }, function(error){
                    console.log(error);
                });
            }]
        }
    })
    .state('show', {
        url: '/show',
        templateUrl: 'templates/stories.html',
        controller: 'StoriesController',
        controllerAs: 'sc',
        resolve: {
            storiesAPI: ['StoryService', function(StoryService){
                return StoryService.getStories('showstories').then(function(response){
                    return response;
                }, function(error){
                    console.log(error);
                });
            }]
        }
    })
    .state('jobs', {
        url: '/jobs',
        templateUrl: 'templates/stories.html',
        controller: 'StoriesController',
        controllerAs: 'sc',
        resolve: {
            storiesAPI: ['StoryService', function(StoryService){
                return StoryService.getStories('jobstories').then(function(response){
                    return response;
                }, function(error){
                    console.log(error);
                });
            }]
        }
    })
    .state('item', {
        url: '/item/:itemId',
        templateUrl: 'templates/item.detail.html',
        controller: function($window){
            $window.scrollTo(0, 0);
        },
        scope: {
            itemId: '='
        }
    });
}]);