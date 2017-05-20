describe('apiCommits Factory', function() {
	var factory;

	beforeEach(angular.mock.module('app'));

	beforeEach(inject(function(apiCommits) {
		factory = apiCommits;
	}));

	it('Factory Existente', function() {
		expect(factory).toBeDefined();
	});

});