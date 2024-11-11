import { Employee } from '../entities/Employee';
import { Class } from '../entities/enums';
import { PaginationResult } from '../entities/types';
export interface EmployeeRepository {
    findById(id: string): Promise<Employee | null>;
    findAllByFilters(name: string, classes: Class, age: number): Promise<Employee[]>;
    findAllByPagination(page: number, limit: number): Promise<PaginationResult<Employee>>;
    saveEmployee(employee: Employee): Promise<Employee>;
    updateEmployee(id: string, employee: Employee): Promise<Employee>;
}
export declare const IEmployeeRepository: unique symbol;
