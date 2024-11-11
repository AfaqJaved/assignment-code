import { Employee } from '../../entities/Employee';
import { Class } from '../../entities/enums';

export interface ListEmployeeWithFilters {
  execute({
    name,
    age,
    classes,
  }: {
    name: string;
    age: number;
    classes: Class;
  }): Promise<Employee[]>;
}

export const IListEmployeeWithFilters = Symbol('ListEmployeeWithFilters');
