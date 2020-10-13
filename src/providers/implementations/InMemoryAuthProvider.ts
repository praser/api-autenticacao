import IAuthProvider, { ICredentials, IAuthResult } from '../IAuthProvider';
import Jwt, { IJwtOptions } from './JwtProvider';
import User from '../../entities/User';

class InMemoryAuthProvider implements IAuthProvider {
  private jwt: Jwt;

  private user: User;

  constructor(props: IJwtOptions) {
    this.jwt = new Jwt(props);
    this.user = new User({
      birthday: new Date(1986, 11, 12),
      cpf: '01133281176',
      id: 'c091800',
      name: 'Rubens Praser Júnior',
      physicalLotationId: 5385,
      physicalLotationAbbreviation: 'GEOTR',
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

      reject(new Error('Bad credentials'));
    });
  }
}

export default InMemoryAuthProvider;
