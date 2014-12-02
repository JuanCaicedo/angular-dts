angular.module('dry-forms').controller('itemFormController', [
    '$scope',
    '$http',
    function ItemFormController($scope, $http) {

        $scope.newItem = {};

        var methods = {
            post: function(newItem) {
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
            },
            put: function(changedItem) {
                $http.put('/item', changedItem)
                    .success(function(data, status, headers, config) {
                        if (data) {
                            for (var index in $scope.items) {
                                var item = $scope.items[index];
                                if (item._id === changedItem._id) {
                                    $scope.items[index] = changedItem;
                                }
                            }
                        } else {
                            alert(JSON.stringify(data));
                        }
                    }).error(function(data, status, headers, config) {
                        console.log('Error when editing item');
                    });
            }
        };

        $scope.submit = function(itemForm) {
            $scope.submitted = true;
            if (itemForm.$valid) {
                console.log($scope.method);
                methods[$scope.method]($scope.newItem);
            }
        };

    }
]);