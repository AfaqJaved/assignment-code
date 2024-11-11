import { RepositoryFactory } from '../../factories/repository.factory';
import { Employee } from 'src/core/entities/Employee';
import { UpdateEmployee } from '../../../core/usecases/employee/update.employee';
export declare class UpdateEmployeeImpl implements UpdateEmployee {
    private readonly repoFactory;
    constructor(repoFactory: RepositoryFactory);
    execute(id: string, employee: Employee): Promise<Employee>;
}
