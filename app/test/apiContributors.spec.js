describe('apiContributors Factory', function() {
	var factory;

	beforeEach(angular.mock.module('app'));

	beforeEach(inject(function(apiContributors) {
		factory = apiContributors;
	}));

	it('Factory Existente', function() {
		expect(factory).toBeDefined();
	});

});