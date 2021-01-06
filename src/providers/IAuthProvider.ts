interface ICredentials {
  username: string,
  password: string,
}

interface IAuthResult {
  result: boolean;
  token: string;
}

interface IAuthProvider {
  auth(credentials: ICredentials): Promise<IAuthResult>
  authWithUsernameOnly(username: string): Promise<IAuthResult>
  refresh(token: string): Promise<IAuthResult>
}

export { IAuthProvider as default, ICredentials, IAuthResult };
