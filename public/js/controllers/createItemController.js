angular.module('dry-forms').controller('createItemController', [
    '$scope',
    '$http',
    function CreateItemController($scope, $http) {

        $http.get('/item').success(function(data, status, headers, config) {
            if (data.items) {
                $scope.items = data.items;
            } else {
                $scope.items = [];
            }
        });
    }
]);