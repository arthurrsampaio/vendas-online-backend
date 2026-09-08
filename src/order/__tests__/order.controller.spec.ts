import { Test, TestingModule } from '@nestjs/testing';
import { OrderController } from '../order.controller';
import { OrderService } from '../order.service';
import { orderMock } from '../mocks/order.mock';
import { createOrderPixMock } from '../mocks/create-order.mock';
import { userEntityMock } from '../../user/__mocks__/user.mock';

describe('OrderController', () => {
  let controller: OrderController;
  let orderService: OrderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: OrderService,
          useValue: {
            createOrder: jest.fn().mockResolvedValue(orderMock),
            findOrdersByUserId: jest.fn().mockResolvedValue([orderMock]),
          },
        },
      ],
      controllers: [OrderController],
    }).compile();

    controller = module.get<OrderController>(OrderController);
    orderService = module.get<OrderService>(OrderService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(orderService).toBeDefined();
  });

  it('should return order in create', async () => {
    const order = await controller.createOrder(
      createOrderPixMock,
      userEntityMock.id,
    );

    expect(order).toEqual(orderMock);
  });

  it('should return orders by userId', async () => {
    const order = await controller.findOrdersByUserId(userEntityMock.id);

    expect(order).toEqual([orderMock]);
  });
});
