var courseRoster = angular.module('courseRoster', ['ui.router']);

courseRoster.directive('samplecourse', function() {
    return {
        restrict: "E",
        scope: {
            name: '='
        },
        template: '<input type="text" ng-model="name">'
    }
})



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
