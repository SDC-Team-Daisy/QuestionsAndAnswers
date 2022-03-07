const app = require('../../server');
const supertest = require('supertest');
const request = supertest(app);

describe('qa/questions', () => {
  it ('Gets list of questions', async () => {
    const res = await request.get(`/qa/questions?product_id=1`);
    // console.log(res.body);
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Object);
  });
});