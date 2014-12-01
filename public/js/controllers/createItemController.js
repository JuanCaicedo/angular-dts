angular.module('dry-forms').controller('createItemController', [
    '$scope',
    '$http',
    function ShortcutController($scope, $http) {

        $scope.submitText = 'Create Item'

        $scope.newItem = {};

        $scope.createItem = function(newItem) {
            console.log('submitted item ' + newItem);
        };
    }
]);