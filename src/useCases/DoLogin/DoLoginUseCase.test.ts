import { goodCredentials } from '../../providers/implementations/InMemoryAuthProvider.fixture';
import subject, { authProvider } from './DoLoginUseCase.fixture';

describe('DoLoginUseCase', () => {
  it('is expected to call auth method', async () => {
    await subject.execute(goodCredentials);
    expect(authProvider.auth).toBeCalled();
  });
});
