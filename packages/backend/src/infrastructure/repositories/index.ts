import { EmployeeRepositoryImpl } from './employee.repository.impl';
import { IEmployeeRepository } from '../../core/repositories/employee.repository';
import { UserRepositoryImpl } from './user.repository.impl';
import { IUserRepository } from '../../core/repositories/user.repository';

export const REPOSITORIES = [
  {
    useClass: EmployeeRepositoryImpl,
    provide: IEmployeeRepository,
  },
  {
    useClass: UserRepositoryImpl,
    provide: IUserRepository,
  },
];
