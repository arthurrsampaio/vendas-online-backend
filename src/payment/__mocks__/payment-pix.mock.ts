import { createOrderPixMock } from '../../order/mocks/create-order.mock';
import { PaymentPixEntity } from '../entities/payment-pix.entity';
import { paymentMock } from './payment.mock';

export const paymentPixMock: PaymentPixEntity = {
  ...paymentMock,
  code: 'qwerty',
  datePayment: new Date('2020-01-01'),
};
