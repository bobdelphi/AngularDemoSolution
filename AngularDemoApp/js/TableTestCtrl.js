var TableTestCtrl = function ($scope, $http,ngTableParams) {
    /*
    var data = [{ name: "Moroni", age: 50 },
                        { name: "Tiancum", age: 43 },
                        { name: "Jacob", age: 27 },
                        { name: "Nephi", age: 29 },
                        { name: "Enos", age: 34 },
                        { name: "Tiancum", age: 43 },
                        { name: "Jacob", age: 27 },
                        { name: "Nephi", age: 29 },
                        { name: "Enos", age: 34 },
                        { name: "Tiancum", age: 43 },
                        { name: "Jacob", age: 27 },
                        { name: "Nephi", age: 29 },
                        { name: "Enos", age: 34 },
                        { name: "Tiancum", age: 43 },
                        { name: "Jacob", age: 27 },
                        { name: "Nephi", age: 29 },
                        { name: "Enos", age: 34}];

    $scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10           // count per page
    }, {
        total: data.length, // length of data
        getData: function ($defer, params) {
            $defer.resolve(data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
    });
    */
    $scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
        sorting: {
            name: 'asc'     // initial sorting
        }
    }, {
        total: 0,           // length of data
        getData: function ($defer, params) {
          
            // ajax request to api
            /*
            Api.get(params.url(), function (data) {
                $timeout(function () {
                    // update table params
                    params.total(data.total);
                    // set new data
                    $defer.resolve(data.result);
                }, 500);
            });
            */
            
            var ss = {
                Subject:"",
                MailTo:"",
                MailType:"",
                SDate:"2014-01-01",
                EDate:"2014-01-02",
                Rows: params.$params.count,
                Page: params.$params.page,
                Sort:"",
                Order:""
            };

            $http.post("api/mail/Page",ss)
                .success(function (data) {
                    params.total(data.TotalItems);
                    //$scope.dangerous = data;
                    $defer.resolve(data.Items);
                });
            
        }
    });


}