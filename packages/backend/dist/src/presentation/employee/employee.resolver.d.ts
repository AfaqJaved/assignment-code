import { UsecaseFactory } from '../../infrastructure/factories/usecase.factory';
import { EmployeeFilter } from './graphql/employee.filter.input';
import { EmployeeInput } from './graphql/employee.input';
import { EmployeeInputForUpdate } from './graphql/employee.update.input';
export declare class EmployeeResolver {
    private readonly useCaseFactory;
    constructor(useCaseFactory: UsecaseFactory);
    getEmployee(id: string): Promise<import("../../core/entities/Employee").Employee>;
    listEmployees(page?: number, limit?: number): Promise<import("../../core/entities/types").PaginationResult<import("../../core/entities/Employee").Employee>>;
    findEmployees(filter: EmployeeFilter): Promise<import("../../core/entities/Employee").Employee[]>;
    addEmployee(input: EmployeeInput): Promise<import("../../core/entities/Employee").Employee>;
    updateEmployee(id: string, input: EmployeeInputForUpdate): Promise<import("../../core/entities/Employee").Employee>;
}
