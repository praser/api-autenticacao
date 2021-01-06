import { Secret } from 'jsonwebtoken';

import { IUser, IUserAttr } from '../entities/User';

interface IPayload {
  iat: number,
  iss: string,
  nbf: number,
  exp: number,
  user: IUserAttr,
}

interface IJwtOptions {
  duration: number;
  issuer: string;
  secret: Secret
}

interface IJwtProvider {
  generate(user: IUser): string;
  refresh(token: string): string;
}

export { IJwtProvider, IJwtOptions, IPayload };
