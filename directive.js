angular.module('your-name.my-directive', []).
  directive('axaMyDirective', function () {
    return {
      restrict: 'AE',
      replace: 'true',
      template: '<h3>Hello World!!</h3>'
	};
  });