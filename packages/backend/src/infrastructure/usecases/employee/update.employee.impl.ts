import { Injectable } from '@nestjs/common';
import { RepositoryFactory } from '../../factories/repository.factory';
import { Employee } from 'src/core/entities/Employee';
import { UpdateEmployee } from '../../../core/usecases/employee/update.employee';

@Injectable()
export class UpdateEmployeeImpl implements UpdateEmployee {
  constructor(private readonly repoFactory: RepositoryFactory) {}

  execute(id: string, employee: Employee): Promise<Employee> {
    return this.repoFactory.employeeRepository.updateEmployee(id, employee);
  }
}
