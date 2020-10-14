import dotenv from 'dotenv-safe';

import server from './server';

dotenv.config();

server.listen(3000);
