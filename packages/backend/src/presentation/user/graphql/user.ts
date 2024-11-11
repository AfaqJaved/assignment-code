import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Role } from '../../../core/entities/enums';

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  role: Role;

  @Field()
  email: string;
}
