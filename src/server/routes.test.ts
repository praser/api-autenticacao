import request from 'supertest';

import server from './server';

describe('Testa a rota /', () => {
  test('[GET] /', async () => {
    const response = await request(server).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('uptime');
    expect(response.body).toHaveProperty('message');
    expect(response.body).toHaveProperty('timestamp');
  });
});

describe('Testa a rota /authenticate', () => {
  test('[POST] /authenticate com credenciais válidas', async () => {
    const response = await request(server)
      .post('/authenticate')
      .send({
        credentials: {
          username: 'a',
          password: 'a',
        },
      });
    const { result, token } = response.body;
    expect(response.status).toBe(200);
    expect(result).toBeTruthy();
    expect(token.length).toBeGreaterThan(0);
  });

  test('[POST] /authenticate com credenciais inválidas', async () => {
    const response = await request(server)
      .post('/authenticate')
      .send({
        credentials: {
          username: 'a',
          password: 'b',
        },
      });
    const { body, status } = response;
    const { result, message } = body;

    expect(status).toBe(401);
    expect(body).not.toHaveProperty('token');
    expect(result).toBeFalsy();
    expect(message.length).toBeGreaterThan(0);
  });
});
describe('Testa a rota /authenticate/refresh', () => {
  test('[GET] authenticate/refresh com um token válido', async () => {
    const { body: authBody } = await request(server)
      .post('/authenticate')
      .send({ credentials: { username: 'a', password: 'a' } });

    const response = await request(server)
      .get('/authenticate/refresh')
      .set('X-Token', authBody.token);

    const { status, body } = response;
    const { result, token } = body;

    expect(status).toBe(200);
    expect(result).toBeTruthy();
    expect(token.length).toBeGreaterThan(0);
  });
});
