'use strict';

describe('Ent to end tests', function() {

	beforeEach(function() {
		browser().navigateTo('../../app/index.html');
	});

	describe('hello world', function() {

		beforeEach(function() {
			browser().navigateTo('#/');
		});

		it('Just say hello', function() {
			expect(element('h1:first').text()).toEqual('Hello !');
		});

		it('Say hello to someone', function() {
			input('yourName').enter('Luke');
			expect(element('h1:first').text()).toEqual('Hello Luke!');
		});

	});

});
