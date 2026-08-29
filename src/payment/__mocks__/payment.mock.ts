import { PaymentType } from '../../payment-status/enums/payment-type.enum';
import { PaymentEntity } from '../entities/payment.entity';

export const paymentMock: PaymentEntity = {
  createdAt: new Date(),
  updatedAt: new Date(),
  discount: 123,
  finalPrice: 123,
  id: 9,
  price: 4321,
  statusId: PaymentType.Done,
  type: '',
};
