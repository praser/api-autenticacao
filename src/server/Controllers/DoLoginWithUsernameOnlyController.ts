import { Request, Response } from 'express';

import fetch from 'node-fetch';

import HttpStatusCode from '../httpStatusCode';
import DoLoginWithUsernameOnlyUseCase from '../../useCases/DoLoginWithUsernameOnly/DoLoginWithUsernameOnlyUseCase';

class DoLoginWithUsernameOnlyController {
  private doLoginWithUsernameOnlyUseCase: DoLoginWithUsernameOnlyUseCase

  constructor(doLoginWithUsernameOnlyUseCase: DoLoginWithUsernameOnlyUseCase) {
    this.doLoginWithUsernameOnlyUseCase = doLoginWithUsernameOnlyUseCase;
  }

  private static getUsernameFromRequest(request: Request): string | null {
    return 'credentials' in request.body
      ? request.body.credentials.username
      : null;
  }

  private static async getUsernameFromOS(): Promise<string> {
    const res = await fetch(process.env.SESSION_USER_ENDPOINT as string);
    const json = await res.json();
    const { id: username } = json;
    return username;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const username = DoLoginWithUsernameOnlyController.getUsernameFromRequest(request)
      || await DoLoginWithUsernameOnlyController.getUsernameFromOS();

    try {
      const body = await this.doLoginWithUsernameOnlyUseCase.execute(username);
      return response.status(HttpStatusCode.OK).json(body);
    } catch (error) {
      return response.status(HttpStatusCode.UNAUTHORIZED).json({
        result: false,
        message: error.message,
      });
    }
  }
}

export default DoLoginWithUsernameOnlyController;
