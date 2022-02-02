import {
  HttpException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { RegisterAuthDto } from './dto/register.dto';
import * as jwt from 'jsonwebtoken';
// import { UpdateAuthDto } from './dto/update-auth.dto';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(infomation: RegisterAuthDto) {
    const userExit = await this.userService.findByEmail(infomation.email);
    console.log("🚀 ~ file: auth.service.ts ~ line 20 ~ AuthService ~ userExit", userExit)
    
    if (!userExit) {
      return this.userService.create(infomation);
    }
    return { code: 400, message: 'email alredy exits' };
  }

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);

    if (!user) throw new HttpException("Do'nt find email", 404);
    if (user && user.password != password)
      throw new HttpException('Faild password ', 401);
    if (user && user.password == password) {
      const payload = { id: user.id, email: user.email };
      return { ...user, accessToken: this.jwtService.sign(payload) };
    }
  }

  async validateById(id: string){
    const user = await this.userService.findOne(id)
    if(!user){
      throw new HttpException("Do'nt find user ", 401);
    }
    return user
  }
}
