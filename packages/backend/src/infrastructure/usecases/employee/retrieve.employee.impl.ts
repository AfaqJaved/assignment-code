import { Injectable } from '@nestjs/common';
import { RepositoryFactory } from '../../factories/repository.factory';
import { Employee } from 'src/core/entities/Employee';
import { RetrieveEmployee } from '../../../core/usecases/employee/retrieve.employee';

@Injectable()
export class RetrieveEmployeeImpl implements RetrieveEmployee {
  constructor(private readonly repoFactory: RepositoryFactory) {}

  execute(id: string): Promise<Employee> {
    return this.repoFactory.employeeRepository.findById(id);
  }
}
