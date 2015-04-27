courseRoster.controller("TestCtrl", function($scope, $stateParams, CoursesFactory, UtilitiesFactory) {

    $scope.courses = CoursesFactory.courses;

    $scope.logCourse = function(course){
        alert(course + " is added!");
    }

});
