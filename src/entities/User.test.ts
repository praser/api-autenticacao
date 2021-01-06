import User from './User';
import { user, data } from './User.fixture';

describe('it User entity', () => {
  it('is expected to have a birthday', () => {
    expect(user.birthday).toMatchObject(data.birthday);
  });

  it('is expected to have a cpf', () => {
    expect(user.cpf).toBe(data.cpf);
  });

  it('is expected to have a id', () => {
    expect(user.id).toBe(data.id);
  });

  it('is expected to have a name', () => {
    expect(user.name).toBe(data.name);
  });

  it('is expected to have a physical lotation id', () => {
    expect(user.physicalLotationId).toBe(data.physicalLotationId);
  });

  it('is expected to have a physical lotation abbreviation', () => {
    expect(user.physicalLotationAbbreviation).toBe(data.physicalLotationAbbreviation);
  });

  it('is expected to have a photo', () => {
    expect(user.photo).toBe(data.photo);
  });

  it('is expected to correct serialize itself', () => {
    expect(typeof user.serialize().birthday).toBe('string');
    expect(typeof user.serialize().cpf).toBe('string');
    expect(typeof user.serialize().id).toBe('string');
    expect(typeof user.serialize().name).toBe('string');
    expect(typeof user.serialize().physicalLotationId).toBe('number');
    expect(typeof user.serialize().physicalLotationAbbreviation).toBe('string');
    expect(typeof user.serialize().photo).toBe('string');
  });

  it('is expected do parse from object', () => {
    const attr = user.serialize();
    const parsedUser = User.parse(attr);
    expect(parsedUser).toBeInstanceOf(User);
    expect(parsedUser.birthday).toBeInstanceOf(Date);
    expect(typeof parsedUser.cpf).toBe('string');
    expect(typeof parsedUser.id).toBe('string');
    expect(typeof parsedUser.name).toBe('string');
    expect(typeof parsedUser.physicalLotationId).toBe('number');
    expect(typeof parsedUser.physicalLotationAbbreviation).toBe('string');
    expect(typeof parsedUser.photo).toBe('string');
  });
});
