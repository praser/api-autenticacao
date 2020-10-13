import { Secret } from 'jsonwebtoken';
import InMemoryAuthProvider from '../../providers/implementations/InMemoryAuthProvider';
import DoLoginUseCase from './DoLoginUseCase';

const duration: number = parseInt(process.env.AUTH_EXPIRATION || '3000', 10);
const expiration: number = Math.floor(Date.now() / 1000) + (duration);
const issuer: string = process.env.AUTH_ISSUER || 'localhost';
const secret: Secret = process.env.AUTH_SECRET || 'unsafesecret';

const inMemoryAuthProvider = new InMemoryAuthProvider({ expiration, issuer, secret });
const doLoginUseCase = new DoLoginUseCase(inMemoryAuthProvider);

export default doLoginUseCase;
