import { Secret } from 'jsonwebtoken';
import { toLower } from 'lodash';
import IAuthProvider from '../../providers/IAuthProvider';
import InMemoryAuthProvider from '../../providers/implementations/InMemoryAuthProvider';
import LdapAuthProvider from '../../providers/implementations/LdapAuthProvider';
import DoLoginUseCase from './DoLoginUseCase';

const duration: number = parseInt(process.env.AUTH_EXPIRATION || '3000', 10);
const expiration: number = Math.floor(Date.now() / 1000) + (duration);
const issuer: string = process.env.AUTH_ISSUER || 'localhost';
const secret: Secret = process.env.AUTH_SECRET || 'unsafesecret';
const driver: string = toLower(process.env.AUTH_DRIVER) || 'inmemory';

let authProvider: IAuthProvider;

if (driver === 'ldap') {
  const ldapUrl: string = process.env.LDAP_SERVER_URL || '';
  authProvider = new LdapAuthProvider({ expiration, issuer, secret }, ldapUrl);
} else {
  authProvider = new InMemoryAuthProvider({ expiration, issuer, secret });
}

const doLoginUseCase = new DoLoginUseCase(authProvider);

export default doLoginUseCase;
