import { UserEntity } from '../entities/user.entity';
import { UserType } from '../enum/user-type.enum';

export const userEntityMock: UserEntity = {
  cpf: '32143215',
  createdAt: new Date(),
  email: 'test@mail.com',
  id: 5152,
  name: 'mock',
  password: '$2b$10$sN2xbF9aXCyxtHmMsuSXfOO9bqpqeQ5H0xK5s3XdcK/1yDYV1Ys8W',
  phone: '67889568',
  typeUser: UserType.User,
  updatedAt: new Date(),
};
