describe('apiRepositories Factory', function() {
	var factory, httpBackend;

	beforeEach(module('app'));

	beforeEach(inject(function(apiRepositories, $httpBackend) {
		factory = apiRepositories;
		httpBackend = $httpBackend;

		httpBackend.whenGET("https://api.github.com/users/mundipagg/repos").respond(
			[{
		    	"name": "goseq",
			    "created_at": "2017-03-17T17:23:35Z",
			    "clone_url": "https://github.com/mundipagg/goseq.git",
			    "stargazers_count": 2,
			    "watchers_count": 2,
			    "language": "Go",
			    "forks_count": 1
			},
			{
		    	"name": "Magento.Integracao",
		    	"created_at": "2016-07-27T13:07:29Z",
			    "clone_url": "https://github.com/mundipagg/Magento.Integracao.git",
			    "stargazers_count": 4,
			    "watchers_count": 4,
			    "language": "PHP",
			    "forks_count": 3
			}]
		);
	}));

	it('Factory Existente', function() {
		expect(factory).toBeDefined();
	});

	it('Retorna Nome do Repositório', function () {			
        factory.allRepositories().then(function (response) {
			expect(response.data[1].name).toEqual("Magento.Integracao");
		});

	    httpBackend.flush();
    });

    it('Retorna Quantidade de Estrelas', function () {			
        factory.allRepositories().then(function (response) {
			expect(response.data[1].stargazers_count).toEqual(4);
		});

	    httpBackend.flush();
    });

    it('Retorna Quantidade de Forks', function () {			
        factory.allRepositories().then(function (response) {
			expect(response.data[0].forks_count).toEqual(1);
		});

	    httpBackend.flush();
    });

    it('Retorna Quantidade de Watchers', function () {			
        factory.allRepositories().then(function (response) {
			expect(response.data[0].watchers_count).toEqual(2);
		});

	    httpBackend.flush();
    });

    it('Retorna Principal Linguagem', function () {			
        factory.allRepositories().then(function (response) {
			expect(response.data[0].language).toEqual("Go");
		});

	    httpBackend.flush();
    });

	it('Retorna Quantidade de Repositórios', function () {			
        factory.allRepositories().then(function (response) {
			expect(response.data.length).toEqual(2);
		});

	    httpBackend.flush();
    });

});