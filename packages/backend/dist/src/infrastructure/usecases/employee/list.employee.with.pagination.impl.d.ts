import { RepositoryFactory } from '../../factories/repository.factory';
import { Employee } from 'src/core/entities/Employee';
import { ListEmployeeWithPagination } from '../../../core/usecases/employee/list.employee.with.pagination';
import { PaginationResult } from '../../../core/entities/types';
export declare class ListEmployeeWithPaginationImpl implements ListEmployeeWithPagination {
    private readonly repoFactory;
    constructor(repoFactory: RepositoryFactory);
    execute(page: number, limit: number): Promise<PaginationResult<Employee>>;
}
