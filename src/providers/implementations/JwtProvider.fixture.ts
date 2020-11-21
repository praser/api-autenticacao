import faker from 'faker';

import JwtProvider from './JwtProvider';

const props = {
  duration: faker.random.number(),
  issuer: faker.random.word(),
  secret: faker.random.word(),
};

const jwtProvider = new JwtProvider(props);

export { props, jwtProvider };
