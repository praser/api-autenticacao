import dotenv from 'dotenv-safe';
dotenv.config({ allowEmptyValues: true });

import server from './server';

const port = process.env.PORT || 3000

server.listen(port);