import { categoryMock } from '../../category/__mocks__/category.mock';
import { CreateProductDto } from '../dtos/create-product.dto';

export const createProductMock: CreateProductDto = {
  categoryId: categoryMock.id,
  name: 'Product Mock',
  image: 'link',
  price: 12.0,
};
