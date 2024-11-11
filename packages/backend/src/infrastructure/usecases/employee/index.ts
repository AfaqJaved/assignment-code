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

export const EMPLOYEE_USECASES = [
  { provide: IAddEmployee, useClass: AddEmployeeImpl },
  { provide: IUpdateEmployee, useClass: UpdateEmployeeImpl },
  { provide: IListEmployeeWithFilters, useClass: ListEmployeeWithFilterImpl },
  {
    provide: IListEmployeeWithPagination,
    useClass: ListEmployeeWithPaginationImpl,
  },
  { provide: IRetrieveEmployee, useClass: RetrieveEmployeeImpl },
];
