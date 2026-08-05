import { Test, TestingModule } from '@nestjs/testing';
import { AddressController } from '../address.controller';
import { AddressService } from '../address.service';
import { createAddressMock } from '../__mocks__/create-address.mock';
import { userEntityMock } from '../../user/__mocks__/user.mock';
import { addressMock } from '../__mocks__/address.mock';

describe('AddressController', () => {
  let controller: AddressController;
  let addressService: AddressService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: AddressService,
          useValue: {
            createAddress: jest.fn().mockResolvedValue(addressMock),
            findAddressByUserId: jest.fn().mockResolvedValue([addressMock]),
          },
        },
      ],
      controllers: [AddressController],
    }).compile();

    controller = module.get<AddressController>(AddressController);
    addressService = module.get<AddressService>(AddressService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(addressService).toBeDefined();
  });

  it('should return addressEntity in createAddress', async () => {
    const address = await controller.createAddress(
      createAddressMock,
      userEntityMock.id,
    );

    expect(address).toEqual(addressMock);
  });

  it('should return addressEntity in findAddressByUserId', async () => {
    jest
      .spyOn(addressService, 'findAddressByUserId')
      .mockResolvedValue([addressMock]);

    const addresses = await controller.findAddressByUserId(userEntityMock.id);

    expect(addresses).toEqual([
      {
        complement: addressMock.complement,
        numberAddress: addressMock.numberAddress,
        cep: addressMock.cep,
      },
    ]);
  });
});
