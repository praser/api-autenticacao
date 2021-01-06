import { TokenExpiredError } from 'jsonwebtoken';
import { user } from '../../entities/User.fixture';

import { jwtProvider as subject, jwtProviderExpired } from './JwtProvider.fixture';

describe('Test Jwt entity', () => {
  it('is expected to generate a jwt', () => {
    expect(typeof subject.generate(user)).toBe('string');
    expect(subject.generate(user)).not.toBe('');
    expect(subject.generate(user).split('.').length).toBe(3);
  });

  it('is expected to refresh the token from a valid one', () => {
    const token = subject.generate(user);
    const freshToken = subject.refresh(token);
    expect(typeof freshToken).toBe('string');
    expect(freshToken.length).toBeGreaterThan(0);
    expect(freshToken.split('.').length).toBe(3);
  });

  it('is expected to throw ExpiredTokenError when refresh from an expired token', () => {
    const token = jwtProviderExpired.generate(user);
    expect(() => subject.refresh(token)).toThrowError(TokenExpiredError);
  });
});
