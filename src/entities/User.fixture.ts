import faker from 'faker';
import User, { IUser } from './User';

faker.locale = 'pt_BR';

const birthday = faker.date.past();
const cpf = '00000000000';
const id = 'c000000';
const name = faker.name.findName();
const photo = 'https://www.flaticon.com/svg/static/icons/svg/147/147144.svg';
const physicalLotationId = 5385;
const physicalLotationAbbreviation = 'GEOTR';

const data: IUser = {
  birthday, cpf, id, name, physicalLotationAbbreviation, physicalLotationId, photo
};

const user = new User(data);

export { user, data };
