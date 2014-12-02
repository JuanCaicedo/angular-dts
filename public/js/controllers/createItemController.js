angular.module('dry-forms').controller('createItemController', [
    '$scope',
    '$http',
    function ShortcutController($scope, $http) {

        $scope.submitText = 'Create Item'

        $scope.newItem = {};

        $http.get('/item').success(function(data, status, headers, config) {
            if (data.items) {
                $scope.items = data.items;
            } else {
                $scope.items = [];
            }
        });

        $scope.createItem = function(newItem) {
            $http.post('/item', newItem)
                .success(function(data, status, headers, config) {
                    $scope.statusMessage = 'Your item has been created';
                    console.log('created new item ' + newItem);
                    $scope.items.push(newItem);
                    $scope.newItem = {};
                    $scope.submitted = false;
                }).error(function(data, status, headers, config) {
                    $scope.statusMessage = 'There was an error creating your item';
                    console.log('error when creating new item');
                });
        };
    }
]);