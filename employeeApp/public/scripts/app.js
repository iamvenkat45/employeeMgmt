/**
 * Created by VenkatSandeep on 5/28/2015.
 */
var app=angular.module('employeeApp', [
    "ui.router",
    "ui.checkbox"
]);

app.config(function($stateProvider,$urlRouterProvider,$httpProvider,$provide) {
    //delete $httpProvider.defaults.headers.common['X-Requested-With'];
    //UI States in the app
    $stateProvider.state("home", {
        url: "/home",
        views:{
            '': { templateUrl: 'views/home.html' },
            'header@home': {
                templateUrl:"views/pageHeader.html"
            },
            'footer@home': {
                templateUrl:"views/pageFooter.html"
            }
        },
        controller:function($scope){
          //$scope.bodyBg=true;
        }
    })
        .state("employee", {
        url: "/employee",
        views:{
            '': { templateUrl: 'views/employee.html' },
            'header@employee': {
                templateUrl:"views/pageHeader.html"
            },
            'footer@employee': {
                templateUrl:"views/pageFooter.html"
            }
        },
        controller:function($scope){
            //$scope.bodyBg=true;
        }
    })
        .state("employee.add", {
        url: "/add",
        templateUrl:"views/addEmployee.html",
        controller:"addEmployee"
    })
        .state("employee.delete", {
        url: "/delete",
        templateUrl:"views/deleteEmployee.html",
        controller:function($scope){
            //$scope.bodyBg=true;
        }
    })
        .state("employee.search", {
        url: "/search",
        templateUrl:"views/searchEmployee.html",
        controller:function($scope){
            //$scope.bodyBg=true;
        }
    });

    $urlRouterProvider.otherwise("/home");
});