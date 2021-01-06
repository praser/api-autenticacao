import IAuthProvider, { IAuthResult } from '../../providers/IAuthProvider';

class DoRefreshUseCase {
  private authProvider: IAuthProvider

  constructor(authProvider: IAuthProvider) {
    this.authProvider = authProvider;
  }

  async execute(token: string): Promise<IAuthResult> {
    return this.authProvider.refresh(token);
  }
}

export default DoRefreshUseCase;
