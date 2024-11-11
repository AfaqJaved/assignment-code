import { Employee } from '../../entities/Employee';

export interface AddEmployee {
  execute(employee: Employee): Promise<Employee>;
}

export const IAddEmployee = Symbol('AddEmployee');
