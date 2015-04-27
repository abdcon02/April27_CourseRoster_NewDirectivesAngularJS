var courseRoster = angular.module('courseRoster', ['ui.router']);

courseRoster.directive('samplecourse', function() {
    return {
        restrict: "E",
        scope: {
            done: '&'
        },
        template: "<input ng-model='coursename' type='text'>" + "{{coursename}}" +
        "<button class='btn btn-sm' ng-click='done({course:coursename})'>add course</button>"
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
