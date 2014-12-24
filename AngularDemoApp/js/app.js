'use strict';


// Declare app level module which depends on filters, and services
angular.module('ngApp', [
'ui.date',
'ui.select2',
//'ngGrid',
  'ngTable',
  'ngRoute',
  'blueimp.fileupload',
  'fundoo.services',
//'myApp.filters',
  'ngApp.factorys',
//'myApp.directives',
  'ngApp.controllers'
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/uploadtest', { templateUrl: 'partials/uploadtest.html', controller: 'UploadTestCtrl' });
    $routeProvider.when('/dialogtest', { templateUrl: 'partials/dialogtest.html', controller: 'DialogTestCtrl' });
    $routeProvider.when('/tabletest', { templateUrl: 'partials/tabletest.html', controller: 'TableTestCtrl' });
    $routeProvider.otherwise({ redirectTo: '/view1' });

} ]).
config(['$httpProvider', 'fileUploadProvider', function ($httpProvider, fileUploadProvider) {
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    /*
    fileUploadProvider.defaults.redirect = window.location.href.replace(
    /\/[^\/]*$/,
    '/cors/result.html?%s'
    );
    */
    if (true) {
        // Demo settings:
        angular.extend(fileUploadProvider.defaults, {
            // Enable image resizing, except for Android and Opera,
            // which actually support image resizing, but fail to
            // send Blob objects via XHR requests:
            //disableImageResize: /Android(?!.*Chrome)|Opera/
            //   .test(window.navigator.userAgent),
            maxFileSize: 5000000
            //acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i
        });
    }
}
]).directive("uploadTest", function () {
    return {
        restrict: 'AE',
        templateUrl: 'partials/uploadtest.html'
    };
});
