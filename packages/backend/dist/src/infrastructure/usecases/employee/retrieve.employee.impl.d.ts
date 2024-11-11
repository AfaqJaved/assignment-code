import { RepositoryFactory } from '../../factories/repository.factory';
import { Employee } from 'src/core/entities/Employee';
import { RetrieveEmployee } from '../../../core/usecases/employee/retrieve.employee';
export declare class RetrieveEmployeeImpl implements RetrieveEmployee {
    private readonly repoFactory;
    constructor(repoFactory: RepositoryFactory);
    execute(id: string): Promise<Employee>;
}
