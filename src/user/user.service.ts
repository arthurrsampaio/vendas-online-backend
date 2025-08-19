import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dtos/createUser.dto';

@Injectable()
export class UserService {
    private users: User[] = [];

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        return {
            ...createUserDto,
            id: 1
        }
}
}
