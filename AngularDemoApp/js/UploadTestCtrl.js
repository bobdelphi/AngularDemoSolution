



var UploadTestCtrl = function ($scope, $http, notificationFactory) {
    /*
    $scope.$on('dataloaded', function () {
    $timeout(function () { // You might need this timeout to be sure its run after DOM render.
    alert("aaa");
    }, 0, false);
    })
    */
    //alert($scope.dbb);
    $scope.$watch('FileFolder', function (value) {
        //alert('hey, myVar has changed!');
        if (value == undefined)
            return;

        if (value == null)
            return;

        $scope.FetchData();

    });

    $scope.FetchData = function () {

        var url = "Ashx/UploadHandler.ashx?FileFolder=" + $scope.FileFolder;
        $scope.loadingFiles = true;
        $scope.options = {
            url: url
        };

        $http.get(url)
    .then(
        function (response) {
            $scope.loadingFiles = false;
            //$scope.queue = response.data.files || [];
            $scope.queue = response.data || [];
        },
        function () {
            $scope.loadingFiles = false;
        }
    );
    }

    /*
    var file = $scope.file,
    state;
    if (file) {
    if (file.url) {
    file.$state = function () {
    return state;
    };
    file.$destroy = function () {
    state = 'pending';
    return $http({
    url: file.delete_url,   //Url,
    method: file.delete_type //Type
    }).then(
    function () {
    state = 'resolved';
    $scope.clear(file);
    },
    function () {
    state = 'rejected';
    }
    );
    };
    } else if (!file.$cancel && !file._index) {
    file.$cancel = function () {
    $scope.clear(file);
    };
    }
    }
    */

}


var FileDestroyController = function ($scope, $http) {
    var file = $scope.file,
                    state;
    if (file.url) {
        file.$state = function () {
            return state;
        };
        file.$destroy = function () {
            state = 'pending';
            return $http({
                url: file.delete_url,   //Url,
                method: file.delete_type //Type
            }).then(
                            function () {
                                state = 'resolved';
                                $scope.clear(file);
                            },
                            function () {
                                state = 'rejected';
                            }
                        );
        };
    } else if (!file.$cancel && !file._index) {
        file.$cancel = function () {
            $scope.clear(file);
        };
    }
}