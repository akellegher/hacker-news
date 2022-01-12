'use strict';

HackerNews.filter("sanitizeHTMLFilter", ['$sce', function ($sce) {
	return function (htmlCode) {
		return $sce.trustAsHtml(htmlCode);
	}
}]);