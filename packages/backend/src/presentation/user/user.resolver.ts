import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Injectable } from '@nestjs/common';
import { UsecaseFactory } from '../../infrastructure/factories/usecase.factory';
import { User } from './graphql/user';
import { LoginResponse } from './graphql/login.response';
import { LoginInput } from './graphql/login.input';

@Injectable()
@Resolver(() => User)
export class UserResolver {
  constructor(private readonly useCaseFactory: UsecaseFactory) {}

  @Mutation(() => LoginResponse)
  async login(@Args('input') input: LoginInput) {
    return await this.useCaseFactory.loginUser.execute(
      input.email,
      input.password,
    );
  }
}
