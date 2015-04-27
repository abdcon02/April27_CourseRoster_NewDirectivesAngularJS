var courseRoster = angular.module('courseRoster', ['ui.router']);

courseRoster.directive('welcometext', function() {
    return function (scope, element, attrs) {
        element.text(scope.message + " " + attrs.message);
    }
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
