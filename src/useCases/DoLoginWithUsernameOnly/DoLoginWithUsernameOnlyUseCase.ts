import IAuthProvider, { IAuthResult } from '../../providers/IAuthProvider';

class DoLoginWithUsernameOnlyUseCase {
  private authProvider: IAuthProvider

  constructor(authProvider: IAuthProvider) {
    this.authProvider = authProvider;
  }

  async execute(usename: string): Promise<IAuthResult> {
    return this.authProvider.authWithUsernameOnly(usename);
  }
}

export default DoLoginWithUsernameOnlyUseCase;
