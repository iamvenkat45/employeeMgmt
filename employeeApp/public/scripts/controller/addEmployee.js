/**
 * Created by bandlamx on 5/30/2015.
 */
app.controller("addEmployee",function($scope,Employee){
    $scope.init=function(){
        $scope.txtFirstName="";
        $scope.textLastName="";
        $scope.txtEmployeeId="";
        $scope.txtEmployeeEmail="";
        $scope.employeeGender="male";
        $scope.employeeMaritalStatus="unmarried";
    };
    $scope.init();

    $scope.saveEmployee=function(){
        var postData={
            firstName:$scope.txtFirstName,
            lastName:$scope.textLastName,
            employeeId:$scope.txtEmployeeId,
            email:$scope.txtEmployeeEmail,
            gender:$scope.employeeGender,
            maritalStatus:$scope.employeeMaritalStatus
        };
        console.log(postData);
        Employee.postEmployeeDetails(angular.toJson(postData)).then(function(data){
            console.log(data);
        },function(err){
            console.log(err);
        })
    };

    $scope.getEmployeeList=function(){
        Employee.getEmployeeList().then(function(data){
            console.log(data);
        },function(error){
            console.log(error);
        })
    };

    $scope.getEmployeeById=function(){
      Employee.getEmployeeById("556cb01bade00df02a68e1a4").then(function(data){
          console.log(data);
      },function(error){
          console.log(error);
      })
    };

    $scope.deleteEmployeeById=function(){
      Employee.deleteEmployeeById("556cb01bade00df02a68e1a4").then(function(data){
          console.log(data);
      },function(error){
          console.log(error);
      })
    };

    $scope.updateEmployeeById=function(){
        var postData={
            firstName:$scope.txtFirstName,
            lastName:$scope.textLastName,
            employeeId:$scope.txtEmployeeId,
            email:$scope.txtEmployeeEmail,
            gender:$scope.employeeGender,
            maritalStatus:$scope.employeeMaritalStatus
        };
        Employee.updateEmployeeById("556cd80981fbdb7c423d96d9",angular.toJson(postData)).then(function(data){
            console.log(data);
        },function(error){
            console.log(error);
        })
    }
});