describe('apiContributors Factory', function() {
	var factory, httpBackend;

	beforeEach(module('app'));

	beforeEach(inject(function(apiContributors, $httpBackend) {
		factory = apiContributors;
		httpBackend = $httpBackend;

		httpBackend.whenGET("https://api.github.com/repos/mundipagg/goseq/contributors").respond(
			[{
		    	"login": "munirwanis",
			    "contributions": 15
			},
			{
		    	"login": "PMoneda",
		    	"contributions": 5
			},
			{
		    	"login": "agaldino",
		    	"contributions": 4
			}]
		);
	}));

	it('Factory Existente', function() {
		expect(factory).toBeDefined();
	});

	it('Retorna Login do Contribuidor', function () {			
        factory.getContributors("goseq").then(function (response) {
			expect(response.data[0].login).toEqual("munirwanis");
		});

	    httpBackend.flush();
    });

	it('Retorna Quantidade de Contribuidores', function() {
		factory.getContributors("goseq").then(function (response) {	
			expect(response.data.length).toEqual(3);
		});

		httpBackend.flush();
	})

	it('Retorna Quantidade de Contribuições do Usuário', function () {			
        factory.getContributors("goseq").then(function (response) {
			expect(response.data[0].contributions).toEqual(15);
		});

	    httpBackend.flush();
    });

});