import { InputType, Field } from '@nestjs/graphql';
import { Attendance, Class, Subject } from '../../../core/entities/enums';

@InputType()
export class EmployeeInputForUpdate {
  @Field({ nullable: true })
  name: string;

  @Field(() => Number, { nullable: true })
  age: number;

  @Field(() => Class, { nullable: true })
  class: Class;

  @Field(() => [Subject], { nullable: true })
  subjects: Subject[];

  @Field({ nullable: true })
  attendance: Attendance;
}
