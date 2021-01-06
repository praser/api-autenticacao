import { TokenExpiredError } from 'jsonwebtoken';
import subject, { goodCredentials, badCredentials } from './InMemoryAuthProvider.fixture';
import { jwtProviderExpired } from './JwtProvider.fixture';
import { user } from '../../entities/User.fixture';
import BadCredentialsError from '../../Errors/BadCredentialsError';

describe('InMemoryAuthProvider', () => {
  describe('Auth with username and password', () => {
    it('is expected to authenticate with good credentials', async () => {
      const auth = await subject.auth(goodCredentials);
      expect(auth.result).toBeTruthy();
      expect(auth).toHaveProperty('token');
      expect(auth.token).not.toBe('');
    });

    it('is expected to not authenticate bad credentials', async () => {
      expect.assertions(1);
      try {
        await subject.auth(badCredentials);
      } catch (error) {
        expect(error).toBeInstanceOf(BadCredentialsError);
      }
    });
  });

  describe('Auth with username only', () => {
    it('is expected to authenticate with a valid username', async () => {
      const auth = await subject.authWithUsernameOnly('a');
      const { result, token } = auth;
      expect(result).toBeTruthy();
      expect(token).not.toBeNull();
      expect(token.split('.').length).toBe(3);
    });

    it('is expected to not authenticate a invalid username', async () => {
      expect.assertions(1);
      try {
        await subject.authWithUsernameOnly('invalid');
      } catch (error) {
        expect(error).toBeInstanceOf(BadCredentialsError);
      }
    });
  });

  describe('Refresh a token', () => {
    it('is expected to refresh a good token', async () => {
      const { token } = await subject.auth(goodCredentials);
      const { result, token: freshToken } = await subject.refresh(token);
      expect(freshToken).not.toBe('');
      expect(freshToken.split('.').length).toBe(3);
      expect(result).toBeTruthy();
    });

    it('is expected to not refresh an expired token', async () => {
      const token = jwtProviderExpired.generate(user);
      expect.assertions(1);
      await subject.refresh(token).catch((e) => {
        expect(e).toBeInstanceOf(TokenExpiredError);
      });
    });
  });
});
