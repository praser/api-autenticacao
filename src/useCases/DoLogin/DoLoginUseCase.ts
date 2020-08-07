import IAuthProvider, { IAuthResult } from '../../providers/IAuthProvider';
import ILoginRequestDTO from './IDoLoginDTO';

class DoLoginUseCase {
  private authProvider: IAuthProvider

  constructor(authProvider: IAuthProvider) {
    this.authProvider = authProvider;
  }

  async execute(data: ILoginRequestDTO): Promise<IAuthResult> {
    return this.authProvider.auth(data);
  }
}

export default DoLoginUseCase;
