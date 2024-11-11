// test/factories.test.ts
import { describe, it, expect } from 'vitest';
import { REPOSITORIES } from './index';
import { EmployeeRepositoryImpl } from './employee.repository.impl';
import { IEmployeeRepository } from '../../core/repositories/employee.repository';
import { UserRepositoryImpl } from './user.repository.impl';
import { IUserRepository } from '../../core/repositories/user.repository';

describe('ALL REPOSITORIES ARRAY', () => {
  it('should contain repositories registered in provider', () => {
    expect(REPOSITORIES).toEqual([
      {
        useClass: EmployeeRepositoryImpl,
        provide: IEmployeeRepository,
      },
      {
        useClass: UserRepositoryImpl,
        provide: IUserRepository,
      },
    ]);
  });
});
