var courseRoster = angular.module('courseRoster', ['ui.router']);

courseRoster.directive('enter', function() {
    return function(scope, element) {
        element.bind("mouseenter", function() {
            console.log("Im inside of you");
        });
    };
});

courseRoster.directive('leave', function() {
    return function(scope, element) {
        element.bind("mouseleave", function() {
            console.log("Peace out Yo");
        });
    };
});






  courseRoster.config(function($stateProvider) {

    $stateProvider.state('home', {
      url: "",
      templateUrl: "partials/home.html",
      controller: 'TestCtrl',
    });

    $stateProvider.state('courses', {
      url: "/courses",
      templateUrl: "partials/courses.html",
      controller: 'CoursesCtrl',
    });

    $stateProvider.state('courses.students', {
      url: "/:courseId",
      templateUrl: "partials/courses.students.html",
      controller: 'StudentsCtrl',
    });
  });
