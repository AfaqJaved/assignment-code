import { EmployeeRepository } from '../../core/repositories/employee.repository';
import { Employee } from '../../core/entities/Employee';
import { Class } from '../../core/entities/enums';
import { PaginationResult } from '../../core/entities/types';
export declare class EmployeeRepositoryImpl implements EmployeeRepository {
    private employees;
    findById(id: string): Promise<Employee | null>;
    findAllByFilters(name: string, classes: Class, age: number): Promise<Employee[]>;
    findAllByPagination(page: number, limit: number): Promise<PaginationResult<Employee>>;
    saveEmployee(employee: Employee): Promise<Employee>;
    updateEmployee(id: string, employee: Employee): Promise<Employee>;
}
