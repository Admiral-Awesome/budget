app.controller('menuCtrl', ['$scope', '$timeout', '$rootScope', 'AuthService', function ($scope, $timeout, $rootScope, AuthService) {
    $scope.setStatus = function () {
        AuthService.getStatus().then(function (data) {
            console.log(data);
            $scope.status = data;
        });
    };
    $scope.setStatus();

    // AuthService.login("admin@admin", "1_1_1").then(function (data) {
    //     console.log(data)
    // }, function (err) {
    //     console.log(err);
    // });
    $scope.logout = function () {
        AuthService.logout().then(function () {
            location.reload();

        });
    }
    $scope.isAuthorized = function () {
        //   console.log($scope.status);
        return $scope.status ? true : false;
    };
}])
