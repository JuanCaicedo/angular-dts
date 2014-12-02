angular.module('dry-forms').controller('editItemController', [
    '$scope',
    '$http',
    function ShortcutController($scope, $http) {

        $scope.submitText = 'Submit Changes'

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
        $scope.editItem = function(changedItem) {
            $http.put('/item', changedItem)
                .success(function(data, status, headers, config) {
                    if (data) {
                        for (var index in $scope.items){
                            var item = $scope.items[index];
                            if(item._id === changedItem._id){
                                $scope.items[index] = changedItem;
                            }
                        }
                    } else {
                        alert(JSON.stringify(data));
                    }
                }).error(function(data, status, headers, config) {
                    console.log('Error when editing item');
                });
        };
    }
]);