import jwt, { Secret } from 'jsonwebtoken';
import { getMilliseconds } from 'date-fns';
import User, { IUser } from './User';

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

class Jwt {
  private expiration: number;

  private issuer: string;

  private secret: Secret;

  constructor(props: IJwtOptions) {
    this.expiration = props.expiration;
    this.issuer = props.issuer;
    this.secret = props.secret;
  }

  private payload(user: User): IPayload {
    const currentTime: number = getMilliseconds(new Date());
    return {
      iat: currentTime,
      iss: this.issuer,
      nbf: currentTime,
      exp: this.expiration,
      user: user.serialize(),
    };
  }

  public generate(user: User): string {
    return jwt.sign(this.payload(user), this.secret);
  }
}

export { Jwt as default, IJwtOptions };
