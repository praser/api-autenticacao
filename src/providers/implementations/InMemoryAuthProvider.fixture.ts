import InMemoryAuthProvider from './InMemoryAuthProvider';
import { ICredentials } from '../IAuthProvider';
import { props } from './JwtProvider.fixture';

const authProvider = new InMemoryAuthProvider(props);
const goodCredentials: ICredentials = {
  username: 'user',
  password: 'user',
};
const badCredentials: ICredentials = {
  username: 'user',
  password: 'invalid',
};

export { authProvider as default, goodCredentials, badCredentials };
