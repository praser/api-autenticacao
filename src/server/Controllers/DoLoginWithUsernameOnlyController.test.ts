import request from 'supertest';

import HttpStatusCode from '../httpStatusCode';
import server from '../server';

const path = '/authenticate/username';
const type = 'application/json';

describe(`Test ${path}`, () => {
  test(`[POST] ${path} with good credentials`, async () => {
    const response = await request(server)
      .post(path)
      .type(type)
      .send({ credentials: { username: 'a' } });

    expect(response.status).toBe(200);
    expect(response.body.result).toBeTruthy();
    expect(response.body).toHaveProperty('token');
    expect(response.body.token.split('.').length).toBe(3);
  });

  test(`[POST]${path} with bad credentials`, async () => {
    const response = await request(server)
      .post(path)
      .type(type)
      .send({ credentials: { username: 'invalid' } });
    expect(response.status).toBe(HttpStatusCode.UNAUTHORIZED);
    expect(response.body.result).toBeFalsy();
    expect(response.body.message).toBe('Bad credentials');
  });
});
