import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dtos/createUser.dto';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
    private users: User[] = [];

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const saltOrRounds = 10;

        const passwordHash = await hash(createUserDto.password, saltOrRounds);

        const user = {
            ...createUserDto,
            password: passwordHash,
            id: this.users.length + 1
        }

        this.users.push(user);

        return user;
    }
    async getAllUsers(): Promise<User[]> {
        return this.users;
    }
}
