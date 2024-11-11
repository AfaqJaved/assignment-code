import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Employee } from './graphql/employee';
import { Injectable, UseGuards } from '@nestjs/common';
import { UsecaseFactory } from '../../infrastructure/factories/usecase.factory';
import { EmployeeWithPagination } from './graphql/employee.with.pagination';
import { EmployeeFilter } from './graphql/employee.filter.input';
import { EmployeeInput } from './graphql/employee.input';
import { randomUUID } from 'node:crypto';
import { EmployeeInputForUpdate } from './graphql/employee.update.input';
import { JwtGuard } from '../../shared/auth/auth.guard';
import { RoleGuard } from '../../shared/auth/role.guard';

@UseGuards(JwtGuard)
@Injectable()
@Resolver(() => Employee)
export class EmployeeResolver {
  constructor(private readonly useCaseFactory: UsecaseFactory) {}

  @UseGuards(new RoleGuard(['EMPLOYEE', 'ADMIN']))
  @Query(() => Employee)
  async getEmployee(@Args('id') id: string) {
    return await this.useCaseFactory.retrieveEmployee.execute(id);
  }

  @UseGuards(new RoleGuard(['EMPLOYEE', 'ADMIN']))
  @Query(() => EmployeeWithPagination)
  async listEmployees(
    @Args('page', { type: () => Number, nullable: false }) page?: number,
    @Args('limit', { type: () => Number, nullable: false }) limit?: number,
  ) {
    return await this.useCaseFactory.listEmployeeWithPagination.execute(
      page,
      limit,
    );
  }

  @UseGuards(new RoleGuard(['EMPLOYEE', 'ADMIN']))
  @Query(() => [Employee])
  async findEmployees(
    @Args('filter', { type: () => EmployeeFilter }) filter: EmployeeFilter,
  ) {
    return await this.useCaseFactory.listEmployeeWithFilters.execute({
      name: filter.name,
      age: filter.age,
      classes: filter.class,
    });
  }

  @UseGuards(new RoleGuard(['ADMIN']))
  @Mutation(() => Employee)
  async addEmployee(@Args('input') input: EmployeeInput) {
    return await this.useCaseFactory.addEmployee.execute({
      id: randomUUID(),
      name: input.name,
      age: input.age,
      employeeClass: input.class,
      subjects: input.subjects,
      attendance: input.attendance,
    });
  }

  @UseGuards(new RoleGuard(['ADMIN']))
  @Mutation(() => Employee)
  async updateEmployee(
    @Args('id', { type: () => String }) id: string,
    @Args('input') input: EmployeeInputForUpdate,
  ) {
    return await this.useCaseFactory.updateEmployee.execute(id, {
      id: id,
      name: input.name,
      age: input.age,
      employeeClass: input.class,
      subjects: input.subjects,
      attendance: input.attendance,
    });
  }
}
