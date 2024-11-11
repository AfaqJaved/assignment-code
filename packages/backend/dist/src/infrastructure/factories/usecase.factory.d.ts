import { AddEmployee } from '../../core/usecases/employee/add.employee';
import { UpdateEmployee } from '../../core/usecases/employee/update.employee';
import { ListEmployeeWithFilters } from '../../core/usecases/employee/list.employee.with.filters';
import { ListEmployeeWithPagination } from '../../core/usecases/employee/list.employee.with.pagination';
import { RetrieveEmployee } from '../../core/usecases/employee/retrieve.employee';
import { LoginUser } from '../../core/usecases/user/login';
export declare class UsecaseFactory {
    readonly addEmployee: AddEmployee;
    readonly updateEmployee: UpdateEmployee;
    readonly listEmployeeWithFilters: ListEmployeeWithFilters;
    readonly listEmployeeWithPagination: ListEmployeeWithPagination;
    readonly retrieveEmployee: RetrieveEmployee;
    readonly loginUser: LoginUser;
}
