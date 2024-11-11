import { Employee } from '../../entities/Employee';
export interface RetrieveEmployee {
    execute(id: string): Promise<Employee>;
}
export declare const IRetrieveEmployee: unique symbol;
