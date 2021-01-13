import { Request, Response } from 'express';

import os from 'os';

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

  private static getUsernameFromOS(): string {
    return process.env.ENVIRONMENT === 'PRD' ? os.userInfo().username : 'a';
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const username = DoLoginWithUsernameOnlyController.getUsernameFromRequest(request)
      || DoLoginWithUsernameOnlyController.getUsernameFromOS();

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
