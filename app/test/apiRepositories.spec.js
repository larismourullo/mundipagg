describe('apiRepositories Factory', function() {
	var factory;

	beforeEach(angular.mock.module('app'));

	beforeEach(inject(function(apiRepositories) {
		factory = apiRepositories;
	}));

	it('Factory Existente', function() {
		expect(factory).toBeDefined();
	});

});