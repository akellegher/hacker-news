'use strict';

// Filter to shorten the url of the story source
HackerNews.filter('domainFilter', function(){
    return function (url) {
        var getLocation = function(href) {
            var l = document.createElement("a");
            l.href = href;
            return l;
        };
        var url = getLocation(url);
        return url.hostname
    };
});