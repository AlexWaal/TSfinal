angular.module('formroute', ['ngAnimate', 'ui.router'])
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
});




