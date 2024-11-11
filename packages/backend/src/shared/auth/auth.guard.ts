import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { JwtPayload } from '../../core/entities/types';
import { verify } from 'jsonwebtoken';
import { JWT_SECRET_KEY } from '../../app.module';
import { SecurityContext } from './security.context';
import { GqlExecutionContext } from '@nestjs/graphql';

export class JwtGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const ctx = GqlExecutionContext.create(context);

    if (!ctx.getContext().req.headers.authorization)
      throw new HttpException('UnAuthorized', HttpStatus.UNAUTHORIZED);

    const token = ctx.getContext().req.headers.authorization.split(' ')[1];
    SecurityContext.getInstance().payload = verify(
      token,
      JWT_SECRET_KEY,
    ) as JwtPayload;
    return true;
  }
}
