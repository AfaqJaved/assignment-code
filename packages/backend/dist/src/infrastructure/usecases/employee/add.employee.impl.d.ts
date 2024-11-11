import { RepositoryFactory } from '../../factories/repository.factory';
import { Employee } from 'src/core/entities/Employee';
import { AddEmployee } from '../../../core/usecases/employee/add.employee';
export declare class AddEmployeeImpl implements AddEmployee {
    private readonly repoFactory;
    constructor(repoFactory: RepositoryFactory);
    execute(employee: Employee): Promise<Employee>;
}
