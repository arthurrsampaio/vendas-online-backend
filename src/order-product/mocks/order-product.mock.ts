import { orderMock } from '../../order/mocks/order.mock';
import { productMock } from '../../product/__mocks__/product.mock';
import { OrderProductEntity } from '../entities/order-product.entity';

export const orderProductMock: OrderProductEntity = {
  amount: 123,
  createdAt: new Date(),
  id: 456,
  orderId: orderMock.id,
  price: 345.2,
  productId: productMock.id,
  updatedAt: new Date(),
};
