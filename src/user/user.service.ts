import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserEntity } from './entities/user.entity';
import { CreateUserDto } from './dtos/createUser.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserType } from './enum/user-type.enum';
import { UpdateUserDTO } from './dtos/update-user.dto';
import { createPasswordHash, validatePassword } from 'src/utils/password';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const user = await this.findUserByEmail(createUserDto.email).catch(
      () => undefined,
    );

    if (user) {
      throw new BadRequestException('Email already in use');
    }

    const saltOrRounds = 10;

    const passwordHash = await createPasswordHash(createUserDto.password);

    return this.userRepository.save({
      ...createUserDto,
      typeUser: UserType.User,
      password: passwordHash,
    });
  }

  async getUserByIdUsingRelations(userId: number): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: {
        id: userId,
      },
      relations: {
        addresses: {
          city: {
            state: true,
          },
        },
      },
    });

    if (!user) {
      throw new NotFoundException(`UserId: ${userId} not found`);
    }

    return user;
  }

  async getAllUsers(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  async findUserByID(userId: number): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new NotFoundException(`UserId: ${userId} not found`);
    }

    return user;
  }

  async findUserByEmail(email: string): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      throw new NotFoundException(`Email: ${email} not found`);
    }

    return user;
  }

  async updatePassword(
    updateUserDTO: UpdateUserDTO,
    userId: number,
  ): Promise<UserEntity> {
    const user = await this.findUserByID(userId);

    const isMatch = await validatePassword(
      updateUserDTO.lastPassword,
      user.password || '',
    );

    if (!user || !isMatch) {
      throw new BadRequestException('Invalid password');
    }

    const newPasswordHash = await createPasswordHash(updateUserDTO.newPassword);

    return this.userRepository.save({
      ...user,
      password: newPasswordHash,
    });
  }
}
