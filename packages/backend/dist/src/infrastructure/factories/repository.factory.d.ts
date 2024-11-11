import { EmployeeRepository } from '../../core/repositories/employee.repository';
import { UserRepository } from '../../core/repositories/user.repository';
export declare class RepositoryFactory {
    readonly employeeRepository: EmployeeRepository;
    readonly userRepository: UserRepository;
}
