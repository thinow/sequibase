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

		it('Navigate to first changelog', function() {
			element('[ng-view] .list :button:first').click();
			expect(browser().location().url()).toBe("/generate/first-changelog.xml");
		});

		it('Generate new id', function() {
			element('[ng-view] .list :button:first').click();
			expect(element('[ng-view] div[ng-model="id"]').text()).toMatch(/\w*-\d*/);
		});

	});

});
