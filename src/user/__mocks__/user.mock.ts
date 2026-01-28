import { UserEntity } from '../entities/user.entity';
import { UserType } from '../enum/user-type.enum';

export const userEntityMock: UserEntity = {
  cpf: '32143215',
  createdAt: new Date(),
  email: 'test@mail.com',
  id: 5152,
  name: 'mock',
  password: 'password',
  phone: '67889568',
  typeUser: UserType.User,
  updatedAt: new Date(),
};
