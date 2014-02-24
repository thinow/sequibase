'use strict';

describe('End to end tests', function() {

	beforeEach(function() {
		browser().navigateTo('../../app/index.html');
	});

	describe('Home page', function() {

		beforeEach(function() {
			browser().navigateTo('#/');
		});

		it('Display changelog list', function() {
			expect(element('[ng-view] .list :button').count()).toEqual(3);
			expect(element('[ng-view] .list :button:first').text()).toEqual('first-changelog.xml');
		});

	});

});
