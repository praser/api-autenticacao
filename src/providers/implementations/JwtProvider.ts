import jwt, { Secret } from 'jsonwebtoken';

import { getUnixTime } from 'date-fns';

import { IJwtProvider, IJwtOptions, IPayload } from '../IJwtProvider';
import User from '../../entities/User';

class Jwt implements IJwtProvider {
  private duration: number;

  private issuer: string;

  private secret: Secret;

  constructor(props: IJwtOptions) {
    this.duration = props.duration;
    this.issuer = props.issuer;
    this.secret = props.secret;
  }

  private payload(user: User): IPayload {
    const currentTime: number = getUnixTime(new Date());
    const expiration: number = currentTime + this.duration;
    return {
      iat: currentTime,
      iss: this.issuer,
      nbf: currentTime,
      exp: expiration,
      user: user.serialize(),
    };
  }

  public generate(user: User): string {
    return jwt.sign(this.payload(user), this.secret);
  }
}

export { Jwt as default, IJwtOptions };
