import request from 'supertest';
import server from './server';

describe('Testa /', () => {
  test('[GET] /', async () => {
    const response = await request(server).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('uptime');
    expect(response.body).toHaveProperty('message');
    expect(response.body).toHaveProperty('timestamp');
  });
});
