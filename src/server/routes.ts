import { Router, Response } from 'express';

import { doLoginUseCase, doRefreshUseCase } from '../useCases';

import HttpStatusCode from './httpStatusCode';

import DoLoginController from './Controllers/DoLoginController';
import DoRefreshController from './Controllers/DoRefreshController';

const appPath = process.env.APP_PATH as string;
const router = Router();

router.get(`${appPath}/`, (_, res): Response => {
  const healthcheck = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: Date.now(),
  };

  return res.status(HttpStatusCode.OK).json(healthcheck);
});

router.post(`${appPath}/authenticate`, (request, response) => {
  const controller = new DoLoginController(doLoginUseCase);
  return controller.handle(request, response);
});

router.get(`${appPath}/authenticate/refresh`, (request, response) => {
  const controller = new DoRefreshController(doRefreshUseCase);
  return controller.handle(request, response);
});

export default router;
