'use strict';

/* Controllers */





angular.module('ngApp.controllers', []).
  controller('UploadTestCtrl', UploadTestCtrl).
  controller('DialogTestCtrl', ['$scope', 'createDialog', DialogTestCtrl]);
