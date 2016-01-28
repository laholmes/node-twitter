var server = require('../dist/server.js').server;   

describe('Health Check', function () {   
    it('responds with status code 200 and hello world text', function(done) {
         var options = { method: 'GET', url: '/{twitter}' };   
         server.inject(options, function(response) {
              expect(response.statusCode).toBe(200); 
        });  
    });
});

describe('get Data', function () {
  it('responds with 404 - Not Found', function(done) {
    var options = {
      method: 'GET',
      url: '/hashtag/notfound'
    };

    server.inject(options, function(response) {      
      expect(response.statusCode).toBe(404);
      expect(response.result.error).toBe('Not Found');
      done();
    });
  });
});