import { Request, Response } from 'express';
import DoLoginUseCase from '../../useCases/DoLogin/DoLoginUseCase';
import HttpStatusCode from '../httpStatusCode';

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
      return response.status(HttpStatusCode.FORBIDDEN).json({
        result: false,
        message: error.message,
      });
    }
  }
}

export default DoLoginController;
