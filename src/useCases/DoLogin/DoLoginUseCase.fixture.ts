import DoLoginUseCase from './DoLoginUseCase';
import InMemoryAuthProvider from '../../providers/implementations/InMemoryAuthProvider';
import { props } from '../../entities/Jwt.fixture';

InMemoryAuthProvider.prototype.auth = jest.fn();
const mockedAuthProvider = new InMemoryAuthProvider(props);
const doLoginUseCase = new DoLoginUseCase(mockedAuthProvider);

export { doLoginUseCase as default, mockedAuthProvider as authProvider };
