describe('apiCommits Factory', function() {
	var factory, httpBackend;

	beforeEach(module('app'));

	beforeEach(inject(function(apiCommits, $httpBackend) {
		factory = apiCommits;
		httpBackend = $httpBackend;

		httpBackend.whenGET("https://api.github.com/repos/mundipagg/goseq/commits").respond(
			[{
		    	"commit": {
					"committer": {
						"name": "GitHub",
						"email": "noreply@github.com",
						"date": "2017-05-02T17:36:11Z"
					}
				}
			},
			{
		    	"commit": {
					"committer": {
						"name": "GitHub",
						"email": "noreply@github.com",
						"date": "2017-05-02T17:32:30Z"
					}
				}
			},
			{
		    	"commit": {
					"committer": {
						"name": "GitHub",
						"email": "noreply@github.com",
						"date": "2017-05-02T17:30:48Z"
					}
				}
			}]
		);
	}));

	it('Factory Existente', function() {
		expect(factory).toBeDefined();
	});

	it('Retorna Data do Commit', function () {			
        factory.getCommits("goseq").then(function (response) {    
			expect(response.data[0].commit.committer.date).toEqual("2017-05-02T17:36:11Z");
		});

	    httpBackend.flush();
    });

	it('Retorna Mês do Commit', function () {
        factory.getCommits("goseq").then(function (response) {        	
			expect(new Date(response.data[0].commit.committer.date).getMonth()).toEqual(4);
		});

	    httpBackend.flush();
    });

	it('Retorna Quantidade de Commits', function() {
		factory.getCommits("goseq").then(function (response) {	
			expect(response.data.length).toEqual(3);
		});

		httpBackend.flush();
	})

});