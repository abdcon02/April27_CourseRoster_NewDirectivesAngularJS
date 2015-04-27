courseRoster.controller("TestCtrl", function($scope, $stateParams, CoursesFactory, UtilitiesFactory) {

    $scope.courses = CoursesFactory.courses;

    $scope.coursename = "blah";
    
    $scope.logCourse = function(course){
        alert(course + " is added!");
    }

});
