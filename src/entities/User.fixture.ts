import faker from 'faker';
import User, { IUser } from './User';

faker.locale = 'pt_BR';

const birthday = faker.date.past();
const cpf = '00000000000';
const id = 'c000000';
const name = faker.name.findName();

const data: IUser = {
  birthday, cpf, id, name,
};

const user = new User(data);

export { user, data };
