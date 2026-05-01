import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CartEntity } from './entities/cart.entity';
import { Repository } from 'typeorm';
import { InsertCartDto } from './dtos/insert-cart.dto';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartEntity)
    private readonly cartRepository: Repository<CartEntity>,
  ) {}

  async verifyActiveCart() {}

  async createCart(insertCart: InsertCartDto): Promise<CartEntity> {}
}
