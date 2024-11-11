import { Employee } from '../../entities/Employee';

export interface UpdateEmployee {
  execute(id: string, employee: Employee): Promise<Employee>;
}

export const IUpdateEmployee = Symbol('UpdateEmployee');
