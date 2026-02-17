import { categoryMock } from '../../category/__mocks__/category.mock';
import { ProductEntity } from '../entities/product.entity';

export const productMock: ProductEntity = {
  categoryId: categoryMock.id,
  createdAt: new Date(),
  id: 2345,
  image: 'image.com',
  name: 'productMock',
  price: 123.4,
  updatedAt: new Date(),
};
