import { InputType, Field } from '@nestjs/graphql';
import { Class, Subject } from '../../../core/entities/enums';

@InputType()
export class EmployeeFilter {
  @Field({ nullable: true })
  name?: string;

  @Field(() => Number, { nullable: true })
  age?: number;

  @Field(() => Class, { nullable: true })
  class?: Class;

  @Field(() => Subject, { nullable: true })
  subjects?: Subject;
}
