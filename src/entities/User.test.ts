import { user as subject, data } from './User.fixture';

describe('Test User entity', () => {
  test('is expected to have a birthday', () => {
    expect(subject.birthday).toMatchObject(data.birthday);
  });

  test('is expected to have a cpf', () => {
    expect(subject.cpf).toBe(data.cpf);
  });

  test('is expected to have a id', () => {
    expect(subject.id).toBe(data.id);
  });

  test('is expected to have a name', () => {
    expect(subject.name).toBe(data.name);
  });

  test('is expected to correct serialize itself', () => {
    expect(typeof subject.serialize().birthday).toBe('string');
    expect(typeof subject.serialize().cpf).toBe('string');
    expect(typeof subject.serialize().id).toBe('string');
    expect(typeof subject.serialize().name).toBe('string');
  });
});
