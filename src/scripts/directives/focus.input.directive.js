'use strict';

HackerNews.directive('focusInput', function ($timeout) {
    return {
        link: function (scope, element, attrs) {
            scope.$watch(attrs.focusInput, function (value) {
                if (value === true) {
                    $timeout(function () {
                        element[0].focus();
                        scope[attrs.focusInput] = false;
                    });
                }
            });
        }
    };
});