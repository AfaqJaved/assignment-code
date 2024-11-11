import { EmployeeRepositoryImpl } from './employee.repository.impl';
import { UserRepositoryImpl } from './user.repository.impl';
export declare const REPOSITORIES: ({
    useClass: typeof EmployeeRepositoryImpl;
    provide: symbol;
} | {
    useClass: typeof UserRepositoryImpl;
    provide: symbol;
})[];
