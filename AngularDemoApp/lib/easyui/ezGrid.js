angular.module('ezGrid', []).directive('ezGrid', ['$parse',
function ($parse) {
    return {
        restrict: 'AE',
        controller: function ($scope, $element) {
            var columns = $scope.columns = [];
            $scope.sortcolumn = "";
            $scope.sortdir = "";
            this.addColumn = function (column) {
                columns.push(column);
            }
            //            this.setSortColumn = function (column) {
            //                $scope.sortcolumn = column;
            //            }
            //            this.setSortDir = function (dir) {
            //                $scope.sortdir = dir;
            //            }

        },
        link: function (scope, element, attrs, controller) {

            var params = scope[attrs.ezGrid];
            if (angular.isUndefined(params)) {
                return;
            }
            scope.params = params;
            scope.params.singleSelect = scope.params.singleSelect || true;

            scope.params.refresh = function () {
                element.datagrid({
                    url: params.dataurl,
                    pagination: true,
                    rownumbers: true,
                    singleSelect: true,
                    //render: scope.params.render,
                    columns: [scope.columns],
                    queryParams: scope.params.queryParams,
                    onSelect: function () {
                        scope.params.selected = element.datagrid('getSelected');
                    }
                });
            }
        }
    };
} ])
.directive('column', [
    function () {
        return {
            require: '^ezGrid',
            restrict: 'AE',
            transclude: true,
            scope: { title: '@' },
            link: function (scope, element, attrs, ezGridCtrl) {
                /*
                var column = {
                field: attrs element.attr("field"),
                title: element.attr("title")
                //sortable: element.attr("sortable")
                };
                */
                if (attrs.formatter && scope.$parent[attrs.formatter]) {
                    var formattertemp = attrs.formatter;
                    attrs.formatter = null;
                    attrs.formatter = scope.$parent[formattertemp];
                }
                else {
                    attrs.formatter = null;
                }
                ezGridCtrl.addColumn(attrs);
                //ezGridCtrl.setSortColumn();
                //ezGridCtrl.setSortDir();
            }
        }
    }
]);
