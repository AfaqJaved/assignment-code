import { InputType, Field } from '@nestjs/graphql';
import { Attendance, Class, Subject } from '../../../core/entities/enums';

@InputType()
export class EmployeeInput {
  @Field()
  name: string;

  @Field(() => Number)
  age: number;

  @Field(() => Class)
  class: Class;

  @Field(() => [Subject])
  subjects: Subject[];

  @Field()
  attendance: Attendance;
}
