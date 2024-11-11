import { describe, it, expect } from 'vitest';
import { IAddEmployee } from '../../../core/usecases/employee/add.employee';
import { AddEmployeeImpl } from './add.employee.impl';
import { IUpdateEmployee } from '../../../core/usecases/employee/update.employee';
import { UpdateEmployeeImpl } from './update.employee.impl';
import { IListEmployeeWithFilters } from '../../../core/usecases/employee/list.employee.with.filters';
import { ListEmployeeWithFilterImpl } from './list.employee.with.filter.impl';
import { IListEmployeeWithPagination } from '../../../core/usecases/employee/list.employee.with.pagination';
import { ListEmployeeWithPaginationImpl } from './list.employee.with.pagination.impl';
import { IRetrieveEmployee } from '../../../core/usecases/employee/retrieve.employee';
import { RetrieveEmployeeImpl } from './retrieve.employee.impl';
import { EMPLOYEE_USECASES } from './index';

describe('EMPLOYEE_USECASES', () => {
  it('should provide correct mappings for employee use case implementations', () => {
    const expectedMappings = [
      { provide: IAddEmployee, useClass: AddEmployeeImpl },
      { provide: IUpdateEmployee, useClass: UpdateEmployeeImpl },
      {
        provide: IListEmployeeWithFilters,
        useClass: ListEmployeeWithFilterImpl,
      },
      {
        provide: IListEmployeeWithPagination,
        useClass: ListEmployeeWithPaginationImpl,
      },
      { provide: IRetrieveEmployee, useClass: RetrieveEmployeeImpl },
    ];

    expect(EMPLOYEE_USECASES).toEqual(expectedMappings);
  });
});
