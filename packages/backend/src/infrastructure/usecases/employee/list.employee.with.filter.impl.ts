import { Injectable } from '@nestjs/common';
import { ListEmployeeWithFilters } from '../../../core/usecases/employee/list.employee.with.filters';
import { RepositoryFactory } from '../../factories/repository.factory';
import { Employee } from 'src/core/entities/Employee';
import { Class } from 'src/core/entities/enums';

@Injectable()
export class ListEmployeeWithFilterImpl implements ListEmployeeWithFilters {
  constructor(private readonly repoFactory: RepositoryFactory) {}

  execute({
    name,
    age,
    classes,
  }: {
    name: string;
    age: number;
    classes: Class;
  }): Promise<Employee[]> {
    return this.repoFactory.employeeRepository.findAllByFilters(
      name,
      classes,
      age,
    );
  }
}
