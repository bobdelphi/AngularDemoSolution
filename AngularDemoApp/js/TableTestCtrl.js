var TableTestCtrl = function ($scope, $http) {
    
    /*
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
    */


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


