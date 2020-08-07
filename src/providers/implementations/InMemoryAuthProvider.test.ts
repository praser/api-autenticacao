import subject, { goodCredentials, badCredentials } from './InMemoryAuthProvider.fixture';

describe('InMemoryAuthProvider', () => {
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
      expect(error.message).toBe('Bad credentials');
    }
  });
});
