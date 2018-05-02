'use strict'

const app = require('../server')
const expect = require('expect')

describe('GET /patients', function() {
    
    it('respond with json', function() {
      return request(app)
        .get('/patients')
        .set('Accept', 'application/json')
        .expect(200)
        .then(response => {
            expect(response.statusCode).to.eq(200)
        })
    });
});
