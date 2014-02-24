'use strict';

angular.module('sequibase', [])
	.controller('DummyController', ['$scope', '$location', function ($scope, $location) {
		$scope.changelogs = ['first-changelog.xml', 'second-changelog.xml', 'third-changelog.xml'];

		$scope.redirect = function(changelog) {
			$location.path('/generate/' + changelog);
		};
	}])
;