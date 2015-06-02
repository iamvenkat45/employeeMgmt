/**
 * Created by bandlamx on 6/1/2015.
 */
app.factory("Employee",function($http,$q) {
    return{
        postEmployeeDetails:function(employeeDetails){
            var deferred = $q.defer();
            $http({
                method:"POST",
                url: "/users/add",
                data:employeeDetails
            }).success(function (data) {
                deferred.resolve(data);
            }).error(function (errorData) {
                deferred.reject(errorData);
            });
            return deferred.promise;
        },
        getEmployeeList:function(){
            var deferred = $q.defer();
            $http({
                method:"GET",
                url: "/users/list"
            }).success(function (data) {
                deferred.resolve(data);
            }).error(function (errorData) {
                deferred.reject(errorData);
            });
            return deferred.promise;
        },
        getEmployeeById:function(id){
            var deferred = $q.defer();
            $http({
                method:"GET",
                url: "/users/"+id
            }).success(function (data) {
                deferred.resolve(data);
            }).error(function (errorData) {
                deferred.reject(errorData);
            });
            return deferred.promise;
        },
        deleteEmployeeById:function(id){
            var deferred = $q.defer();
            $http({
                method:"DELETE",
                url: "/users/"+id
            }).success(function (data) {
                deferred.resolve(data);
            }).error(function (errorData) {
                deferred.reject(errorData);
            });
            return deferred.promise;
        },
        updateEmployeeById:function(id,employeeDetails){
            var deferred = $q.defer();
            $http({
                method:"PUT",
                url: "/users/"+id,
                data:employeeDetails
            }).success(function (data) {
                deferred.resolve(data);
            }).error(function (errorData) {
                deferred.reject(errorData);
            });
            return deferred.promise;
        }
    }
});