import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Roles } from '../decorators/roles.decorator';
import { UserType } from '../user/enum/user-type.enum';
import { CartEntity } from './entities/cart.entity';
import { InsertCartDto } from './dtos/insert-cart.dto';

@Roles(UserType.User)
@Controller('cart')
export class CartController {
  @UsePipes(ValidationPipe)
  @Post()
  async createCart(@Body() insertCart: InsertCartDto): Promise<CartEntity> {}
}
