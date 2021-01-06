import IAuthProvider, { ICredentials, IAuthResult } from '../IAuthProvider';
import User from '../../entities/User';

import Jwt, { IJwtOptions } from './JwtProvider';
import BadCredentialsError from '../../Errors/BadCredentialsError';

class InMemoryAuthProvider implements IAuthProvider {
  private jwt: Jwt

  private user: User

  constructor(props: IJwtOptions) {
    this.jwt = new Jwt(props);
    this.user = new User({
      birthday: new Date(1986, 11, 12),
      cpf: '01133281176',
      id: 'c091800',
      name: 'Rubens Praser Júnior',
      physicalLotationId: 5385,
      physicalLotationAbbreviation: 'GEOTR',
      photo: 'https://www.flaticon.com/svg/static/icons/svg/147/147144.svg',
    });
  }

  async auth(credentials: ICredentials): Promise<IAuthResult> {
    return new Promise((resolve, reject) => {
      if (credentials.username === credentials.password) {
        resolve({
          result: true,
          token: this.jwt.generate(this.user),
        });
      }

      reject(new BadCredentialsError());
    });
  }

  async authWithUsernameOnly(username: string): Promise<IAuthResult> {
    return new Promise((resolve, reject) => {
      if (username === 'a') {
        resolve({
          result: true,
          token: this.jwt.generate(this.user),
        });
      }

      reject(new BadCredentialsError());
    });
  }

  async refresh(token: string): Promise<IAuthResult> {
    return new Promise((resolve, reject) => {
      try {
        const freshToken = this.jwt.refresh(token);
        resolve({
          result: true,
          token: freshToken,
        });
      } catch (error) {
        reject(error);
      }
    });
  }
}

export default InMemoryAuthProvider;
