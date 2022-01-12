'use strict';

HackerNews.controller('HomeController', ['$scope', '$location', '$window', function($scope, $location, $window){
    var hc = this;
    hc.searchActive = false;
    hc.mobMenuActive = false;

    // Header navigation items
    hc.headerNav = [{
        'name': 'new',
        'url': '/newest'
    }, {
        'name': 'past',
        'url': '/past'
    }, {
        'name': 'comments',
        'url': '/comments'
    }, {
        'name': 'ask',
        'url': '/ask'
    }, {
        'name': 'show',
        'url': '/show'
    }, {
        'name': 'jobs',
        'url': '/jobs'
    }, {
        'name': 'submit',
        'url': '/submit'
    }];


    // Footer navigation items
    hc.footerNav = [{
        'name': 'Guidelines',
        'url': '/newsguidelines'
    }, {
        'name': 'FAQ',
        'url': '/faq'
    }, {
        'name': 'Lists',
        'url': '/lists'
    }, {
        'name': 'API',
        'url': '/api'
    }, {
        'name': 'Security',
        'url': '/security'
    }, {
        'name': 'Legal',
        'url': '/legal'
    }, {
        'name': 'Apply to YC',
        'url': '/apply'
    }, {
        'name': 'Contact',
        'url': '/contact'
    }];

    // Handle Navigation
    hc.handleNav = function (hash, url, id) {
        if(url === hc.url){
            return false;
        } else {
            $window.open(hash + url, '_self');
            document.body.classList.remove('menu-active');
            hc.mobMenuActive = false;
            hc.searchActive = false;
            $window.scrollTo(0, 0);
        }
    };

    // Toggle mobile menu
    hc.toggleMobMenu = function(){
        if(hc.mobMenuActive === false) {
            hc.mobMenuActive = true;
            document.body.classList.toggle('menu-active');
            hc.searchActive = false;
        } else {
            hc.mobMenuActive = false;
            document.body.classList.toggle('menu-active');
        }
    };

    // Hide mobile menu on larger screens
    $window.addEventListener('resize', function(){
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        if (w >= 992){
            document.body.classList.remove('menu-active');
            hc.mobMenuActive = false;
            $scope.$apply();
        }
    }, false);


    // Toggle the search function
    hc.toggleSearch = function () {
        const searchInput = document.getElementById('hn-search-input');
        if (hc.searchActive === false) {
            hc.searchActive = true;
        } else {
            hc.searchActive = false;
            searchInput.value = '';
            hc.searchText = '';
        }
    };

    // Watch for changes to url
    $scope.$watch(function () {
        hc.url = $location.url();
    });
}]);