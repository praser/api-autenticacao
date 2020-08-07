import faker from 'faker';
import Jwt from './Jwt';

const props = {
  expiration: faker.random.number(),
  issuer: faker.random.word(),
  secret: faker.random.word(),
};

const jwt = new Jwt(props);

export { props, jwt };
