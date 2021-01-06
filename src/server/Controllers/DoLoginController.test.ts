import request from 'supertest';

import HttpStatusCode from '../httpStatusCode';
import server from '../server';
import { goodCredentials, badCredentials } from '../../providers/implementations/InMemoryAuthProvider.fixture';

const path = '/authenticate';
const type = 'application/json';

describe(`Testa ${path}`, () => {
  test(`[POST] ${path} with good credentials`, async () => {
    const response = await request(server)
      .post(path)
      .type(type)
      .send({ credentials: goodCredentials });

    expect(response.status).toBe(200);
    expect(response.body.result).toBeTruthy();
    expect(response.body).toHaveProperty('token');
  });

  test(`[POST]${path} with bad credentials`, async () => {
    const response = await request(server)
      .post(path)
      .type(type)
      .send({ credentials: badCredentials });
    expect(response.status).toBe(HttpStatusCode.UNAUTHORIZED);
    expect(response.body.result).toBeFalsy();
    expect(response.body.message).toBe('Bad credentials');
  });
});
