'use strict';

angular.module('ngApp.factorys', []).
    factory('notificationFactory', function () {
    return {
        success: function () {
            toastr.success("Success");
        },
        error: function (text) {
            toastr.error(text, "Error!");
        },
        info:function (text) {
            toastr.info(text, "Info!");
        }
    };
}); 