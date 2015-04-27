var courseRoster = angular.module('courseRoster', ['ui.router']);

courseRoster.directive('samplecourse', function() {
    return {
        scope:{
            whatup:"&"
        },
        template: "<div class='btn btn-info' ng-click='whatup()'>Hello<div>"
    }
});

courseRoster.directive('debug', function($compile) {
    return {
        terminal: true,
        priority: 1000000,
        link: function (scope, element) {
            var clone = element.clone();
            element.attr("style", "color:red");
            clone.removeAttr('debug');
            var clonedElement = $compile(clone)(scope);
            element.after(clonedElement);
        }
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
