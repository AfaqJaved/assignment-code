import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { RepositoryFactory } from '../../factories/repository.factory';
import { LoginUser } from '../../../core/usecases/user/login';
import { JwtPayload } from '../../../core/entities/types';
import { sign } from 'jsonwebtoken';
import { JWT_SECRET_KEY } from '../../../app.module';

@Injectable()
export class LoginImpl implements LoginUser {
  constructor(private readonly repoFactory: RepositoryFactory) {}

  async execute(email: string, password: string): Promise<{ token: string }> {
    const userFound = await this.repoFactory.userRepository.findByEmail(email);

    if (userFound === null || userFound.password !== password)
      throw new HttpException('Invalid Credentials', HttpStatus.UNAUTHORIZED);

    const token = await this.generateToken({
      id: userFound.id,
      role: userFound.role,
      name: userFound.name,
    });
    return { token };
  }

  async generateToken(payload: JwtPayload) {
    return sign(payload, JWT_SECRET_KEY);
  }
}
