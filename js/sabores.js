var app = angular.module('app', []);
app.controller('ctrl', ['$scope', function($scope) {
    $scope.opciones = [
        { value: 1, name: 'Pastel de 1 sabor' },
        { value: 2, name: 'Pastel de 2 sabor' },
        { value: 3, name: 'Pastel de 3 sabor' },
        { value: 4, name: 'Pastel de 4 sabor' },
        { value: 5, name: 'Pastel de 4 sabor' },
        { value: 6, name: 'Pastel de 4 sabor' },
        { value: 7, name: 'Pastel de 4 sabor' },
        { value: 8, name: 'Pastel de 4 sabor' }
    ]
    $scope.selectOption = {};
}])