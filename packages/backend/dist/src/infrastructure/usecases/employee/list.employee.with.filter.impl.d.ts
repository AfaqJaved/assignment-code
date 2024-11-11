import { ListEmployeeWithFilters } from '../../../core/usecases/employee/list.employee.with.filters';
import { RepositoryFactory } from '../../factories/repository.factory';
import { Employee } from 'src/core/entities/Employee';
import { Class } from 'src/core/entities/enums';
export declare class ListEmployeeWithFilterImpl implements ListEmployeeWithFilters {
    private readonly repoFactory;
    constructor(repoFactory: RepositoryFactory);
    execute({ name, age, classes, }: {
        name: string;
        age: number;
        classes: Class;
    }): Promise<Employee[]>;
}
