import { Inject, Injectable } from '@nestjs/common';
import {
  AddEmployee,
  IAddEmployee,
} from '../../core/usecases/employee/add.employee';
import {
  IUpdateEmployee,
  UpdateEmployee,
} from '../../core/usecases/employee/update.employee';
import {
  IListEmployeeWithFilters,
  ListEmployeeWithFilters,
} from '../../core/usecases/employee/list.employee.with.filters';
import {
  IListEmployeeWithPagination,
  ListEmployeeWithPagination,
} from '../../core/usecases/employee/list.employee.with.pagination';
import {
  IRetrieveEmployee,
  RetrieveEmployee,
} from '../../core/usecases/employee/retrieve.employee';
import { ILoginUser, LoginUser } from '../../core/usecases/user/login';

@Injectable()
export class UsecaseFactory {
  @Inject(IAddEmployee)
  public readonly addEmployee: AddEmployee;

  @Inject(IUpdateEmployee)
  public readonly updateEmployee: UpdateEmployee;

  @Inject(IListEmployeeWithFilters)
  public readonly listEmployeeWithFilters: ListEmployeeWithFilters;

  @Inject(IListEmployeeWithPagination)
  public readonly listEmployeeWithPagination: ListEmployeeWithPagination;

  @Inject(IRetrieveEmployee)
  public readonly retrieveEmployee: RetrieveEmployee;

  @Inject(ILoginUser)
  public readonly loginUser: LoginUser;
}
