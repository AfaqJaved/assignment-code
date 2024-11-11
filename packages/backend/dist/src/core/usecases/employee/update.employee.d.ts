import { Employee } from '../../entities/Employee';
export interface UpdateEmployee {
    execute(id: string, employee: Employee): Promise<Employee>;
}
export declare const IUpdateEmployee: unique symbol;
