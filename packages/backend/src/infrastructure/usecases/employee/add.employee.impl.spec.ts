import { beforeEach, describe, expect, it, vi } from 'vitest';
import { AddEmployeeImpl } from './add.employee.impl';
import { RepositoryFactory } from '../../factories/repository.factory';
import { Employee } from 'src/core/entities/Employee';
import { Class, Subject } from '../../../core/entities/enums';

describe('AddEmployeeImpl', () => {
  let addEmployeeImpl: AddEmployeeImpl;
  let repositoryFactory: RepositoryFactory;
  let employeeRepository: {
    saveEmployee: (employee: Employee) => Promise<Employee>;
  };

  beforeEach(() => {
    employeeRepository = {
      saveEmployee: vi.fn().mockResolvedValue({
        id: '1',
        name: 'John Doe',
        employeeClass: Class.DEVELOPER,
        age: 22,
        subjects: [Subject.ENGLISH],
        attendance: 'FULL',
      }),
    };

    repositoryFactory = {
      employeeRepository,
    } as unknown as RepositoryFactory;

    addEmployeeImpl = new AddEmployeeImpl(repositoryFactory);
  });

  it('should save an employee and return it', async () => {
    const employee: Employee = {
      id: '1',
      name: 'John Doe',
      employeeClass: Class.DEVELOPER,
      age: 22,
      subjects: [Subject.ENGLISH],
      attendance: 'FULL',
    };

    const result = await addEmployeeImpl.execute(employee);

    expect(result).toEqual(employee);
    expect(employeeRepository.saveEmployee).toHaveBeenCalledWith(employee);
    expect(employeeRepository.saveEmployee).toHaveBeenCalledTimes(1);
  });

  it('should handle errors thrown by the repository', async () => {
    const employee: Employee = {
      id: '1',
      name: 'John Doe',
      employeeClass: Class.DEVELOPER,
      age: 22,
      subjects: [Subject.ENGLISH],
      attendance: 'FULL',
    };

    const error = new Error('Repository error');
    (employeeRepository.saveEmployee as any).mockRejectedValueOnce(error);

    await expect(addEmployeeImpl.execute(employee)).rejects.toThrow(
      'Repository error',
    );
  });
});
