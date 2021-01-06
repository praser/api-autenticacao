import DoLoginWithUsernameOnlyUseCase from './DoLoginWithUsernameOnlyUseCase';
import InMemoryAuthProvider from '../../providers/implementations/InMemoryAuthProvider';
import { props } from '../../providers/implementations/JwtProvider.fixture';

InMemoryAuthProvider.prototype.authWithUsernameOnly = jest.fn();
const mockedAuthProvider = new InMemoryAuthProvider(props);
const doLoginWithUsernameOnlyUseCase = new DoLoginWithUsernameOnlyUseCase(mockedAuthProvider);

export { doLoginWithUsernameOnlyUseCase as default, mockedAuthProvider as authProvider };
