import { Employee } from '../../entities/Employee';
import { PaginationResult } from '../../entities/types';

export interface ListEmployeeWithPagination {
  execute(page: number, limit: number): Promise<PaginationResult<Employee>>;
}

export const IListEmployeeWithPagination = Symbol('ListEmployeeWithPagination');
