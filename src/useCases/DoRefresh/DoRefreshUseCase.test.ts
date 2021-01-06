import subject, { authProvider } from './DoRefreshUseCase.fixture';
import { user } from '../../entities/User.fixture';
import { jwtProvider } from '../../providers/implementations/JwtProvider.fixture';

describe('DoRefreshUseCase', () => {
  it('is expected to call refresh method', async () => {
    const token = jwtProvider.generate(user);
    await subject.execute(token);
    expect(authProvider.refresh).toBeCalled();
  });
});
