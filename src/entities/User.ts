import { formatISO } from 'date-fns';

interface IUser {
  birthday: Date;
  cpf: string;
  id: string;
  name: string;
  physicalLotationId: number;
  physicalLotationAbbreviation: string;
  photo: string;
}

class User implements IUser {
  public readonly birthday: Date = new Date();

  public readonly cpf: string = '';

  public readonly id: string = '';

  public readonly name: string = '';

  public readonly physicalLotationId: number = 0;

  public readonly physicalLotationAbbreviation: string = '';

  public readonly photo: string = ''

  constructor(props?: IUser) {
    if (props) {
      this.birthday = props.birthday;
      this.cpf = props.cpf;
      this.id = props.id;
      this.name = props.name;
      this.physicalLotationId = props.physicalLotationId;
      this.physicalLotationAbbreviation = props.physicalLotationAbbreviation;
      this.photo = props.photo;
    }
  }

  public serialize(): IUser {
    return { ...this, birthday: formatISO(this.birthday) };
  }
}

export { User as default, IUser };
