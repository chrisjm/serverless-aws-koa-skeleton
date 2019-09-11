const chai = require('chai');
const expect = chai.expect;

const HelloController = require('../../src/controllers/v1/Hello');
const cb = () => {};

describe('Hello Handler', () => {
  describe('GET /v1/hello', () => {
    let ctx;

    beforeEach(() => {
      ctx = {};
    });

    it('returns a 200 and a string', async() => {
      await HelloController.get(ctx, cb);
      expect(ctx.status).to.eq(200);
      expect(ctx.body.status).to.eq(true);
      expect(ctx.body.message).to.eq('Hello World 👋');
    });
  });

  describe('POST /v1/hello', () => {
    let ctx;

    beforeEach(() => {
      ctx = {};
    });

    it('returns a 201 and a string', async() => {
      await HelloController.post(ctx, cb);
      expect(ctx.status).to.eq(201);
      expect(ctx.body.status).to.eq(true);
      expect(ctx.body.message).to.eq('Hello world! 👋');
    });
  });
});
