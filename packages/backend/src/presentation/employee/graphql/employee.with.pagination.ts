import { ObjectType, Field } from '@nestjs/graphql';
import { Employee } from './employee';

@ObjectType()
export class EmployeeWithPagination {
  @Field(() => Number)
  totalItems: number;

  @Field(() => Number)
  currentPage: number;

  @Field(() => Number)
  totalPages: number;

  @Field(() => Number)
  pageSize: number;

  @Field(() => Boolean)
  hasPreviousPage: number;

  @Field(() => Boolean)
  hasNextPage: number;

  @Field(() => [Employee], { nullable: true })
  items: Employee[];
}
