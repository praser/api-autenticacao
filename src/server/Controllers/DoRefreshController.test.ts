import request from 'supertest';

import HttpStatusCode from '../httpStatusCode';
import server from '../server';
import { user } from '../../entities/User.fixture';
import { jwtProvider, jwtProviderExpired } from '../../providers/implementations/JwtProvider.fixture';

const path = '/authenticate/refresh';
const type = 'application/json';
const token = jwtProvider.generate(user);
const expiredToken = jwtProviderExpired.generate(user);

describe('DoRefreshController', () => {
  test('[GET] /authenticate/refresh with a valid token', async () => {
    const response = await request(server)
      .get(path)
      .set('X-Token', token);

    expect(response.status).toBe(200);
    expect(response.body.result).toBeTruthy();
    expect(response.body).toHaveProperty('token');
    expect(response.body.token.split('.').length).toBe(3);
  });

  test('[GET] /authenticate/refresh with an expired token', async () => {
    const response = await request(server)
      .get(path)
      .type(type)
      .set('X-Token', expiredToken);

    expect(response.status).toBe(HttpStatusCode.UNAUTHORIZED);
    expect(response.body.result).toBeFalsy();
    expect(response.body.message).toBe('TokenExpiredError: jwt expired');
  });
});
