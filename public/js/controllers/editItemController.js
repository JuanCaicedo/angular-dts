angular.module('dry-forms').controller('editItemController', [
    '$scope',
    '$http',
    function ShortcutController($scope, $http) {

        $scope.submitText = 'Edit Item'

        $scope.newItem = {};

        $scope.editItem = function(changedItem) {
            console.log('Edit item ' + changedItem);
        };
    }
]);