angular.module('dry-forms').controller('createItemController', [
    '$scope',
    '$http',
    function ShortcutController($scope, $http) {

        $scope.submitText = 'Create Item'

        $scope.newItem = {};

        $scope.createItem = function(newItem) {
            $http.post('/item', newItem)
                .success(function(data, status, headers, config) {
                    $scope.statusMessage = 'Your item has been created';
                    console.log('created new item ' + newItem);
                }).error(function(data, status, headers, config) {
                    $scope.statusMessage = 'There was an error creating your item';
                    console.log('error when creating new item');
                });
        };
    }
]);