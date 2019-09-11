const url = 'http://localhost:3000';
var chai = require('chai');
var chaiHttp = require('chai-http');
const expect = chai.expect;
chai.use(chaiHttp);

describe('Hello World', () => {
  it('will return a 200 with a string', async() => {
    const res = await chai.request(url).get('/v1/hello');
    expect(res.statusCode).to.equal(200);
    expect(res.body.status).to.eq(true);
    expect(res.body.message).to.eq('Hello World 👋');
  });

  it('will return a 201 with a string', async() => {
    const res = await chai.request(url).post('/v1/hello');
    expect(res.statusCode).to.equal(201);
    expect(res.body.status).to.eq(true);
    expect(res.body.message).to.eq('Hello world! 👋');
  });
});
