import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SingInDto } from './dto/login-user.dto';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) { }
  async signIn({
    email,
    password,
  }: SingInDto): Promise<{ accessToken: string }> {
    const user = await this.usersService.findOneByEmail(email);

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new UnauthorizedException();
    }
    const payload = { email: email, sub: user.id };
    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }
}
