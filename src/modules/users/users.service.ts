import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private userRepository: typeof User,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    await this.validateUserExists(createUserDto);

    const saltOrRounds = 10;
    const hash = await bcrypt.hash(createUserDto.password, saltOrRounds);
    createUserDto.password = hash;

    return await this.userRepository.create({ ...createUserDto });
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.findAll<User>({
      include: ['addresses', 'cart', 'favorite', 'orders'],
    });
  }

  async findOne(id: number): Promise<User> {
    return await this.userRepository.findByPk<User>(id, {
      include: ['addresses', 'cart', 'favorite', 'orders'],
    });
  }

  async findOneByEmail(email: string) {
    return await this.userRepository.findOne<User>({
      where: {
        email,
      },
    });
  }

  async findOneByCpf(cpf: string) {
    return await this.userRepository.findOne<User>({
      where: {
        cpf,
      },
    });
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

  private async validateUserExists(createUserDto: CreateUserDto) {
    const isEmailUnique = await this.findOneByEmail(createUserDto.email);
    if (isEmailUnique) {
      throw new HttpException('EMAIL JÁ CADASTRADO', HttpStatus.CONFLICT);
    }
    const isCpfUnique = await this.findOneByCpf(createUserDto.cpf);

    if (isCpfUnique) {
      throw new HttpException('CPF JÁ CADASTRADO', HttpStatus.CONFLICT);
    }
  }
}
