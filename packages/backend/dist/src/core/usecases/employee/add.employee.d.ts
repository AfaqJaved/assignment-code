import { Employee } from '../../entities/Employee';
export interface AddEmployee {
    execute(employee: Employee): Promise<Employee>;
}
export declare const IAddEmployee: unique symbol;
