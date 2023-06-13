import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SingInDto } from './dto/login-user.dto';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

export interface singInReturn {
  accessToken: string;
}

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn({ email, password }: SingInDto): Promise<singInReturn> {
    const user = await this.usersService.findOneByEmail(email);

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new UnauthorizedException();
    }

    const payload = {
      id: user.id,
      email: user.email,
      fullName: user.fullName,
    };

    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }

  async singInAdmin({ email, password }: SingInDto): Promise<singInReturn> {
    const admin = await this.usersService.findAdminByEmail(email);

    if (!admin) {
      throw new UnauthorizedException('Admin not found');
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      throw new UnauthorizedException();
    }

    const payload = {
      id: admin.id,
      email: admin.email,
      fullName: admin.fullName,
    };

    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }
}
