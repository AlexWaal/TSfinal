angular.module('todoController', ['ngAnimate', 'ui.router'])
  .controller('TodoCrtl', ['$scope', '$http', 'Todos', function ($scope, $http, Todos, $sce) {


    load = function () {
      Todos.get().success(function (data) {
        $scope.todos = data;
      });
    };

    load();

    $scope.save = function () {
      Todos.create($scope.todo)
        .success(function () {
          load();
        });
    };

    $scope.delete = function (id) {
      Todos.delete(id)
        .success(function (data) {
          load();
        });
    };
  }])

.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
    
        .state('form', {
            url: '/form',
            templateUrl: 'form.html',
            controller: 'formController'
        })
        
        .state('form.soundform', {
            url: '/soundform',
            templateUrl: 'soundform.html'
        })

        .state('form.infoform', {
            url: '/infoform',
            templateUrl: 'infoform.html'
        })

        .state('form.addform', {
            url: '/addform',
            templateUrl: 'addform.html'
        });
       
    $urlRouterProvider.otherwise('/form/soundform');
})

.controller('formController', function($scope) {
    
    $scope.formData = {};
    $scope.processForm = function() {
        alert('awesome!');  
    };
});