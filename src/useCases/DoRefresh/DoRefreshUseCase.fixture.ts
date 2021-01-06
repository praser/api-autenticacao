import DoRefreshUseCase from './DoRefreshUseCase';
import InMemoryAuthProvider from '../../providers/implementations/InMemoryAuthProvider';
import { props } from '../../providers/implementations/JwtProvider.fixture';

InMemoryAuthProvider.prototype.refresh = jest.fn();
const mockedAuthProvider = new InMemoryAuthProvider(props);
const doRefreshUseCase = new DoRefreshUseCase(mockedAuthProvider);

export { doRefreshUseCase as default, mockedAuthProvider as authProvider };
