// UpdateEmployeeImpl.spec.ts
import { describe, it, expect, vi } from 'vitest';
import { RepositoryFactory } from '../../factories/repository.factory';
import { Employee } from 'src/core/entities/Employee';
import { UpdateEmployeeImpl } from './update.employee.impl';
import { Class, Subject } from '../../../core/entities/enums';

describe('UpdateEmployeeImpl', () => {
  let updateEmployeeImpl: UpdateEmployeeImpl;
  let repoFactory: RepositoryFactory;
  let mockEmployeeRepository: any;

  beforeEach(() => {
    mockEmployeeRepository = {
      updateEmployee: vi.fn().mockResolvedValue({} as Employee), // Mock the actual implementation
    };

    repoFactory = {
      employeeRepository: mockEmployeeRepository,
    } as RepositoryFactory;

    updateEmployeeImpl = new UpdateEmployeeImpl(repoFactory);
  });

  it('should update an employee and return the updated employee', async () => {
    const employee: Employee = {
      id: '123',
      name: 'John Doe',
      age: 30,
      employeeClass: Class.DEVELOPER,
      subjects: [Subject.MATH, Subject.SCIENCE],
      attendance: 'FULL',
    };
    const updateEmployeeSpy = vi
      .spyOn(mockEmployeeRepository, 'updateEmployee')
      .mockResolvedValue(employee);
    const id = '123';

    const result = await updateEmployeeImpl.execute(id, employee);

    expect(updateEmployeeSpy).toHaveBeenCalledWith(id, employee);
    expect(result).toEqual(employee);
  });

  it('should handle errors thrown by the repository', async () => {
    mockEmployeeRepository.updateEmployee.mockRejectedValueOnce(
      new Error('Error updating employee'),
    );
    const id = '1';
    const employee: Employee = {
      id: '123',
      name: 'John Doe',
      age: 30,
      employeeClass: Class.DEVELOPER,
      subjects: [Subject.MATH, Subject.SCIENCE],
      attendance: 'FULL',
    };

    await expect(updateEmployeeImpl.execute(id, employee)).rejects.toThrow(
      'Error updating employee',
    );
  });
});
