import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private userRepository: typeof User,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.userRepository.create({ ...createUserDto });
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.findAll<User>();
  }

  async findOne(id: number): Promise<User> {
    return await this.userRepository.findByPk<User>(id);
  }

  async update(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<[affectedCount: number]> {
    return await this.userRepository.update(updateUserDto, {
      where: {
        id,
      },
    });
  }

  async remove(id: number): Promise<number> {
    return await this.userRepository.destroy({
      where: {
        id,
      },
    });
  }
}
