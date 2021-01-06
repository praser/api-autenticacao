import express from 'express';

import cors from 'cors';

import jwt from 'express-jwt';

import router from './routes';

const server = express();
const appPath = process.env.APP_PATH as string;

server.use(express.json());
server.use(cors());
server.use(router);
server.use(
  jwt({
    secret: process.env.AUTH_SECRET as string,
    algorithms: ['HS256'],
    getToken: (req) => req.header('X-Token'),
  }).unless({
    path: [
      `${appPath}/`,
      `${appPath}/authenticate`,
      `${appPath}/authenticate/username`,
    ],
  }),
);

export default server;
