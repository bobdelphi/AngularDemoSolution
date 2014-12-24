var TableTestCtrl = function ($scope, $http, ngTableParams) {
    //var a = GetData();
    GetData3()
    .then(function (msg) {
        //console.log(msg);
        alert(msg);
        //alert(JSON.stringify(msg));
        return GetData4();
    })

    .then(function (msg2) {
        //console.log(msg2);
        alert(msg2);

    });

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
                Subject: "",
                MailTo: "",
                MailType: "",
                SDate: "2014-01-01",
                EDate: "2014-01-02",
                Rows: params.$params.count,
                Page: params.$params.page,
                Sort: "",
                Order: ""
            };

            $http.post("api/mail/Page", ss)
                .success(function (data) {
                    params.total(data.TotalItems);
                    //$scope.dangerous = data;
                    $defer.resolve(data.Items);
                });

        }
    });


}



    function GetData3() {
        return $.ajax({
            url: "api/values/get/3",
            method: "get"
        });
    }

    function GetData4() {
        return $.ajax({
            url: "api/values/get/4",
            method: "get"
        });
    }


