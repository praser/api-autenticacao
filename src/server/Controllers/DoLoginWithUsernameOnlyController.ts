import { Request, Response } from 'express';

import HttpStatusCode from '../httpStatusCode';
import DoLoginWithUsernameOnlyUseCase from '../../useCases/DoLoginWithUsernameOnly/DoLoginWithUsernameOnlyUseCase';

class DoLoginWithUsernameOnlyController {
  private doLoginWithUsernameOnlyUseCase: DoLoginWithUsernameOnlyUseCase

  constructor(doLoginWithUsernameOnlyUseCase: DoLoginWithUsernameOnlyUseCase) {
    this.doLoginWithUsernameOnlyUseCase = doLoginWithUsernameOnlyUseCase;
  }

  private static getUsernameFromRequest(request: Request): string {
    return request.body.credentials.username as string;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const username = DoLoginWithUsernameOnlyController.getUsernameFromRequest(request);
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
