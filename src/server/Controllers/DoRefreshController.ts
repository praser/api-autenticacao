import { Request, Response } from 'express';

import HttpStatusCode from '../httpStatusCode';
import DoRefreshUseCase from '../../useCases/DoRefresh/DoRefreshUseCase';

class DoRefreshController {
  private doRefreshUseCase: DoRefreshUseCase

  constructor(doRefreshUseCase: DoRefreshUseCase) {
    this.doRefreshUseCase = doRefreshUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const token = request.header('X-Token') as string;
    try {
      const body = await this.doRefreshUseCase.execute(token);
      return response.status(HttpStatusCode.OK).json(body);
    } catch (error) {
      return response.status(HttpStatusCode.UNAUTHORIZED).json({
        result: false,
        message: `${error.name}: ${error.message}`,
      });
    }
  }
}

export default DoRefreshController;
