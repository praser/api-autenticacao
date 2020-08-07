import { Router, Response } from 'express';
import HttpStatusCode from './httpStatusCode';
import DoLoginController from './Controllers/DoLoginController';
import doLoginUseCase from '../useCases/DoLogin';

const router = Router();

router.get('/', (_, res): Response => {
  const healthcheck = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: Date.now(),
  };

  return res.status(HttpStatusCode.OK).json(healthcheck);
});

router.post('/authenticate', (request, response) => {
  const controller = new DoLoginController(doLoginUseCase);
  return controller.handle(request, response);
});

export default router;
