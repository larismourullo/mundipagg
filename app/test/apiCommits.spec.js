describe('apiCommits Factory', function() {
	var factory;

	beforeEach(angular.mock.module('app'));

	beforeEach(inject(function(apiCommits) {
		factory = apiCommits;
	}));

	it('Factory Existente', function() {
		expect(factory).toBeDefined();
	});

	/*it('Retorna Data do Commit', function() {
		factory.getCommits("goseq").then(function (response) {
			expect(response.data[1].commit.committer.date).toEqual("2017-05-02T17:36:11Z");
		});
	});

	it('Retorna Mês do Commit', function() {
		factory.getCommits("goseq").then(function (response) {
			expect(new Data(response.data[1].commit.committer.date).getMonth()).toEqual(4);
		});
	});

	it('Retorna Quantidade de Commits', function() {
		factory.getCommits("goseq").then(function (response) {	
			console.log(response.data.length);	
			expect(response.data.length).toEqual();
		});
	});*/

});