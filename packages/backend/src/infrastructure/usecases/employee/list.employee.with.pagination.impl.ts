import { Injectable } from '@nestjs/common';
import { RepositoryFactory } from '../../factories/repository.factory';
import { Employee } from 'src/core/entities/Employee';
import { ListEmployeeWithPagination } from '../../../core/usecases/employee/list.employee.with.pagination';
import { PaginationResult } from '../../../core/entities/types';

@Injectable()
export class ListEmployeeWithPaginationImpl
  implements ListEmployeeWithPagination
{
  constructor(private readonly repoFactory: RepositoryFactory) {}

  execute(page: number, limit: number): Promise<PaginationResult<Employee>> {
    return this.repoFactory.employeeRepository.findAllByPagination(page, limit);
  }
}
