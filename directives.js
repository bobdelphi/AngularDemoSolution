'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]).
  directive('ngSparkline', function() {
  return {
    restrict: 'A',
    template: '<div class="sparkline"></div>'
   
  }
  }).
  directive('pqGrid', function () {
  return {
    restrict: 'A',
    link : function (scope, element, attrs,controller) {
	        var config = scope[attrs.config];
	        config.rowSelect = function (evt, obj) {
	        	if (attrs.selectRow)
	        		controller.selectRow = obj.dataModel.data[obj.rowIndx];
    		  }
	        element.pqGrid(config);
    }
} }).
   directive('butterbar', ['$rootScope',function ($rootScope) {
  return {
    link:function(scope,element,attrs)
    {
      element.addClass('hide');

      $rootScope.$on('$routeChangeStart',function(){
        //alert("aaa");
        element.removeClass('hide');
      });

      $rootScope.$on('$routeChangeSuccess',function(){
         //alert("bbb");
         element.addClass('hide');
       });

    }
}}]).
  directive('ngTable', function () {
  return {
    restrict: 'A',
    template: '<table>'+
                '<tr>'+
                  '<th>id</th>'+
                  '<th>name</th>'+
                '</tr>'+
                "<tr ng-repeat='obj in rows'>"+
                  //'<td>{{obj.id}}</td>'+
                  //'<td>{{obj.name}}</td>'+
                  'ng-transclude'+
                '</tr>'+
              '</table>',
    scope: { datalist : '='},
    controller: function($scope, $element) {
                  //alert($ngModel);
                  /*
                  $scope.rows = 
                  [
                    {id:1,name:'a'},
                    {id:2,name:'b'}
                  ];
                  */
                  $scope.addRow = function(row) {
                    rows.push(row);

                  }

                },
    link :  function (scope, element, attrs,ngModel) {

  }
}}).
  directive('column', function() {
    return {
      require: '^ngTable',
      restrict: 'E',
      transclude: true,
      scope: { },
      link: function(scope, element, attrs, ngTableCtrl) {
        ngTableCtrl.addRow(scope);
      },
      template: '<td>1</td><td>2</td>',
      replace: true
    };
  }).
  directive('hello', function() {
      return {
          restrict: 'E',
          template: '<div>Hi there</div>',
          replace: true
      };
  });
