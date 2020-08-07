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
}

export { IAuthProvider as default, ICredentials, IAuthResult };
