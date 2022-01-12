'use strict';

HackerNews.directive('scrollBtn', ['$window', function($window){
    return{
        template: '<button class="btn btn-arrow scroll sticky" id="scroll-btn" ng-click="scrollToTop()" title="Back to top" ng-show="!hc.mobMenuActive"><span class="arrow-up"></span></button>',
        restrict: 'E',
        link: function(scope, elem, attrs){
            scope.hc = scope.$parent.$parent.hc;
            
            scope.scrollToTop = function (){
                $window.scrollTo({top: 0, behavior: 'smooth'});
            }

            // Display 'Back to Top' button when page has been scrolled past a certain point
            function showTopBtn() {
                const scrollBtn = document.getElementById('scroll-btn');
                if(document.documentElement.scrollTop > 750){
                    scrollBtn.style.opacity = 1;
                } else {
                    scrollBtn.style.opacity = 0;
                }
            }

            $window.addEventListener('scroll', showTopBtn, false);
            showTopBtn();
        }, 
        scope: {}
    }
}]);