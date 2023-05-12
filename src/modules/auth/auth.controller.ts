import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SingInDto } from './dto/login-user.dto';

@Controller('login')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post()
  signIn(@Body() signInDto: SingInDto | any) {
    return this.authService.signIn(signInDto);
  }
}
