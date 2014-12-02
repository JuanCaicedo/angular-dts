angular.module('dry-forms').controller('editItemController', [
    '$scope',
    '$http',
    function ShortcutController($scope, $http) {

        $scope.chosenItem = {};

        $http.get('/item').success(function(data, status, headers, config) {
            if (data.items) {
                $scope.items = data.items;
            } else {
                $scope.items = [];
            }
        });

        $scope.chooseItem = function(item) {
            $scope.chosenItem.name = item.name;
            $scope.chosenItem.description = item.description;
            $scope.chosenItem._id = item._id;
        }

    }
]);