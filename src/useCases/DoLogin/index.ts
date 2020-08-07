import { Secret } from 'jsonwebtoken';
import InMemoryAuthProvider from '../../providers/implementations/InMemoryAuthProvider';
import DoLoginUseCase from './DoLoginUseCase';

const expiration: number = parseInt(process.env.AUTH_SECRET || '3000', 10);
const issuer: string = process.env.AUTH_ISSUER || 'localhost';
const secret: Secret = process.env.AUTH_SECRET || 'unsafesecret';

const inMemoryAuthProvider = new InMemoryAuthProvider({ expiration, issuer, secret });
const doLoginUseCase = new DoLoginUseCase(inMemoryAuthProvider);

export default doLoginUseCase;
