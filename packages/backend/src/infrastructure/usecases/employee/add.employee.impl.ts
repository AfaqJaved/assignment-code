import { Injectable } from '@nestjs/common';
import { RepositoryFactory } from '../../factories/repository.factory';
import { Employee } from 'src/core/entities/Employee';
import { AddEmployee } from '../../../core/usecases/employee/add.employee';

@Injectable()
export class AddEmployeeImpl implements AddEmployee {
  constructor(private readonly repoFactory: RepositoryFactory) {}

  execute(employee: Employee): Promise<Employee> {
    return this.repoFactory.employeeRepository.saveEmployee(employee);
  }
}
