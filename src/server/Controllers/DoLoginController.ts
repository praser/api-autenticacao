import { Request, Response } from 'express';

import HttpStatusCode from '../httpStatusCode';
import DoLoginUseCase from '../../useCases/DoLogin/DoLoginUseCase';

class DoLoginController {
  private doLoginUseCase: DoLoginUseCase;

  constructor(doLoginUseCase: DoLoginUseCase) {
    this.doLoginUseCase = doLoginUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const { credentials } = request.body;

    try {
      const body = await this.doLoginUseCase.execute(credentials);
      return response.status(HttpStatusCode.OK).json(body);
    } catch (error) {
      return response.status(HttpStatusCode.UNAUTHORIZED).json({
        result: false,
        message: error.message,
      });
    }
  }
}

export default DoLoginController;
