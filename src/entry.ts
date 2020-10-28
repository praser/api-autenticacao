import dotenv from 'dotenv-safe';

dotenv.config({ allowEmptyValues: true });

// eslint-disable-next-line import/first
import server from './server';

const port = process.env.PORT || 3000;

server.listen(port);
// eslint-disable-next-line no-console
console.log(`Server is listening on port ${port}`);
