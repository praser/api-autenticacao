import { Client, SearchResult } from 'ldapts';
import { parse } from 'date-fns';
import { startCase, toLower, toUpper } from 'lodash';
import IAuthProvider, { ICredentials, IAuthResult } from '../IAuthProvider';
import Jwt, { IJwtOptions } from './JwtProvider';
import User from '../../entities/User';

class LdapAuthProvider implements IAuthProvider {
  private jwt: Jwt

  private user: User = new User()

  private client: Client

  constructor(props: IJwtOptions, url: string) {
    this.client = new Client({ url });
    this.jwt = new Jwt(props);
  }

  async auth(credentials: ICredentials): Promise<IAuthResult> {
    const { username } = credentials;
    return new Promise((resolve, reject) => {
      this.bind(credentials)
        .then(async () => {
          const searchResult = await this.search(username);
          this.setUser(searchResult);
          resolve({
            result: true,
            token: this.jwt.generate(this.user),
          });
        })
        .catch(() => {
          reject(new Error('Bad credentials'));
        });
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

  private async bind(credentials: ICredentials): Promise<void> {
    const { username, password } = credentials;
    const dn = this.getDN(username);
    return this.client.bind(dn, password);
  }

  private async search(username: string): Promise<SearchResult> {
    const dn = this.getDN(username);
    return this.client.search(dn);
  }

  private setUser(searchResult: SearchResult): void {
    const data = searchResult.searchEntries[0];
    const birthday: Date = parse(
      `${data['dt-nascimento']}`,
      'dd/MM/yyyy',
      new Date(),
    );
    const cpf = `${data['nu-cpf']}`;
    const id: string = toLower(`${data.uid}`);
    const name: string = startCase(toLower(`${data.givenName}`));
    const physicalLotationId: number = parseInt(
      `${data['nu-lotacaofisica']}`,
      10,
    );
    const physicalLotationAbbreviation: string = toUpper(
      `${data['sg-unidade']}`,
    );
    const photo = `http://tdv.caixa/img/${id}.jpg`;

    const params = {
      birthday,
      cpf,
      id,
      name,
      physicalLotationId,
      physicalLotationAbbreviation,
      photo,
    };
    this.user = new User(params);
  }

  private getDN(uid: string): string {
    return `uid=${uid},ou=People,o=caixa`;
  }
}

export default LdapAuthProvider;
