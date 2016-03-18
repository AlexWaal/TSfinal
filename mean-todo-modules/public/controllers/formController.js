angular.module('formController', [])
.controller('formCtrl', function($scope) {
    
    $scope.formData = {};
    $scope.processForm = function() {
        alert('awesome!');  
    };
});