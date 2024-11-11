import { ObjectType, Field, ID, registerEnumType } from '@nestjs/graphql';
import { Class, Subject } from '../../../core/entities/enums';

//register enums
registerEnumType(Class, { name: 'Class' });
registerEnumType(Subject, { name: 'Subject' });

@ObjectType()
export class Employee {
  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  name?: string;

  @Field(() => Number, { nullable: true })
  age?: number;

  @Field(() => Class, { nullable: true })
  class?: Class;

  @Field(() => [Subject], { nullable: true })
  subjects?: Subject[];

  @Field({ nullable: true })
  attendance?: string;
}
