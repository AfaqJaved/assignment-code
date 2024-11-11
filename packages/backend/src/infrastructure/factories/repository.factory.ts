import { Inject, Injectable } from '@nestjs/common';
import {
  EmployeeRepository,
  IEmployeeRepository,
} from '../../core/repositories/employee.repository';
import {
  IUserRepository,
  UserRepository,
} from '../../core/repositories/user.repository';

@Injectable()
export class RepositoryFactory {
  @Inject(IEmployeeRepository)
  public readonly employeeRepository: EmployeeRepository;

  @Inject(IUserRepository)
  public readonly userRepository: UserRepository;
}
