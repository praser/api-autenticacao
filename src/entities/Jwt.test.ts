import { user } from './User.fixture';
import { jwt as subject } from './Jwt.fixture';

describe('Test Jwt entity', () => {
  it('is expected to generate a jwt', () => {
    expect(typeof subject.generate(user)).toBe('string');
    expect(subject.generate(user)).not.toBe('');
    expect(subject.generate(user).split('.').length).toBe(3);
  });
});
