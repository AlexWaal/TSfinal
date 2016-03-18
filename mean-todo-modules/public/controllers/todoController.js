angular.module('todoController', [])
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
  }]);
