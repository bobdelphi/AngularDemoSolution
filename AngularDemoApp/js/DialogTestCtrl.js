var DialogTestCtrl = function ($scope, createDialogService) {
    $scope.launchInlineModal = function () {
        createDialogService({
            id: 'simpleDialog',
            template:
                '<div class="row-fluid">' +
                ' <h3>This is how the Simple Modal was launched</h3>' +
                ' <div>' +
                '   <div class="codebox">' +
                '<pre>' +
                'createDialog({\n' +
                '    id: "inlineDialog",\n' +
                '    <span style="color:red">template: "&lt;div>&lt;!--template HTML here...-->&lt;/div>"</span>\n' +
                '    title: "A Inline Modal Dialog",\n' +
                '    backdrop: true,\n' +
                '    success: {\n' +
                '        label: "Yay",\n' +
                '        fn: function(){\n' +
                '            console.log("Inline modal closed");\n' +
                '        }\n' +
                '    }\n' +
                '});\n' +
                '</pre>\n' +
                '   </div>\n' +
                ' </div>\n' +
                '</div>',
            title: 'A Inline Modal Dialog',
            backdrop: true,
            success: { label: 'Success', fn: function () { alert("suc"); } },
            cancel: { label: 'Cancel', fn: function () { alert("can"); } }
        });
    };
    $scope.launchObjectModal = function () {
        createDialogService({
            id: 'simpleDialog',
            template: angular.element(
                '<div class="row-fluid">' +
                ' <h3>This is how the Simple Modal was launched</h3>' +
                ' <div>' +
                '   <div class="codebox">' +
                '<pre>' +
                'createDialog({\n' +
                '    id: "objectDialog",\n' +
                '    <span style="color:red">template: angular.element("...")</span>\n' +
                '    title: "A Object Modal Dialog",\n' +
                '    backdrop: true,\n' +
                '    success: {\n' +
                '        label: "Yay",\n' +
                '        fn: function(){\n' +
                '            console.log("Object modal closed");\n' +
                '        }\n' +
                '    }\n' +
                '});\n' +
                '</pre>\n' +
                '   </div>\n' +
                ' </div>\n' +
                '</div>'),
            title: 'A Object Modal Dialog',
            backdrop: true,
            success: { label: 'Success', fn: function () {  } }
        });
    };
    $scope.launchSimpleModal = function () {
        createDialogService('partials/simpleModal.html', {
            id: 'simpleDialog',
            title: 'A Simple Modal Dialog',
            controller: 'SimpleModalCtrl',
            backdrop: true,
            success: { label: 'Success', fn: function () {  } }
        });
    };
    $scope.launchComplexModal = function () {
        createDialogService('complexModal.html', {
            id: 'complexDialog',
            title: 'A Complex Modal Dialog',
            backdrop: true,
            controller: 'ComplexModalController',
            success: { label: 'Success', fn: function () {  } }
        }, {
            myVal: 15,
            assetDetails: {
                name: 'My Asset',
                description: 'A Very Nice Asset'
            }
        });
    };
}