import dotenv from 'dotenv-safe';
dotenv.config();

import server from './server';

server.listen(3000);
