courseRoster.controller("TestCtrl", function($scope, $stateParams, CoursesFactory, UtilitiesFactory) {

    $scope.courses = CoursesFactory.courses;

    $scope.trouble = function() {
        alert("There is trouble in sector 5");
    };

});
