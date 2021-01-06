import faker from 'faker';

import JwtProvider from './JwtProvider';

const props = {
  duration: faker.random.number(),
  issuer: faker.random.word(),
  secret: process.env.AUTH_SECRET as string,
};

const jwtProvider = new JwtProvider(props);
const jwtProviderExpired = new JwtProvider({ ...props, duration: -1000 });

export { props, jwtProvider, jwtProviderExpired };
