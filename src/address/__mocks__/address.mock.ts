import { cityMock } from '../../city/__mocks__/city.mock';
import { AddressEntity } from '../entities/address.entity';
import { userEntityMock } from '../../user/__mocks__/user.mock';

export const addressMock: AddressEntity = {
  cep: '123351156',
  cityId: cityMock.id,
  complement: 'asdafgag',
  createdAt: new Date(),
  id: 633453,
  numberAddress: 12341,
  updatedAt: new Date(),
  userId: userEntityMock.id,
};
