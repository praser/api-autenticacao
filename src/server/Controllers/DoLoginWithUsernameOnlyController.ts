import { Request, Response } from 'express';

import fetch from 'node-fetch';

import HttpStatusCode from '../httpStatusCode';
import DoLoginWithUsernameOnlyUseCase from '../../useCases/DoLoginWithUsernameOnly/DoLoginWithUsernameOnlyUseCase';

class DoLoginWithUsernameOnlyController {
  private doLoginWithUsernameOnlyUseCase: DoLoginWithUsernameOnlyUseCase

  constructor(doLoginWithUsernameOnlyUseCase: DoLoginWithUsernameOnlyUseCase) {
    this.doLoginWithUsernameOnlyUseCase = doLoginWithUsernameOnlyUseCase;
  }

  private static isWithCredentials(request: Request): boolean {
    return 'credentials' in request.body;
  }

  private static getUsernameFromRequest(request: Request): string {
    return request.body.credentials.username as string;
  }

  private static async getUsernameFromOS(): Promise<string> {
    const res = await fetch(process.env.SESSION_USER_ENDPOINT as string);
    const json = await res.json();
    const { id: username } = json;

    return new Promise((resolve, reject) => (username ? resolve(username) : reject()));
  }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      let username: string;

      if (DoLoginWithUsernameOnlyController.isWithCredentials(request)) {
        username = DoLoginWithUsernameOnlyController.getUsernameFromRequest(request);
      } else {
        username = await DoLoginWithUsernameOnlyController.getUsernameFromOS();
      }

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
