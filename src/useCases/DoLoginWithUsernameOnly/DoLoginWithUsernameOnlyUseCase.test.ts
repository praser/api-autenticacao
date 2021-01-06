import subject, { authProvider } from './DoLoginWithUsernameOnlyUseCase.fixture';

describe('DoRefreshUseCase', () => {
  it('is expected to call refresh method', async () => {
    await subject.execute('a');
    expect(authProvider.authWithUsernameOnly).toBeCalled();
  });
});
