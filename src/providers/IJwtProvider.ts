import { Secret } from 'jsonwebtoken';
import { IUser } from '../entities/User';

interface IPayload {
  iat: number,
  iss: string,
  nbf: number,
  exp: number,
  user: IUser,
}

interface IJwtOptions {
  expiration: number;
  issuer: string;
  secret: Secret
}

interface IJwtProvider {
  generate(user: IUser): string;
}

export { IJwtProvider, IJwtOptions, IPayload };
