import { describe, it, expect, beforeEach, vi } from 'vitest';
import { RepositoryFactory } from '../../factories/repository.factory';
import { Employee } from 'src/core/entities/Employee';
import { RetrieveEmployeeImpl } from './retrieve.employee.impl';
import { Class, Subject } from '../../../core/entities/enums';

describe('RetrieveEmployeeImpl', () => {
  let retrieveEmployeeImpl: RetrieveEmployeeImpl;
  let mockRepositoryFactory: RepositoryFactory;
  let mockEmployeeRepository = {} as any;

  beforeEach(() => {
    // Create a mock for the employee repository
    mockEmployeeRepository = {
      findById: vi.fn(),
    };

    // Create a mock for the repository factory
    mockRepositoryFactory = {
      get employeeRepository() {
        return mockEmployeeRepository;
      },
    } as unknown as RepositoryFactory; // Type assertion to bypass readonly properties

    // Instantiate the service with the mocked repository factory
    retrieveEmployeeImpl = new RetrieveEmployeeImpl(mockRepositoryFactory);
  });

  it('should execute findById and return the expected Employee', async () => {
    // Arrange
    const expectedEmployee: Employee = {
      id: '1',
      name: 'John Doe',
      age: 30,
      employeeClass: Class.DEVELOPER,
      subjects: [Subject.MATH, Subject.SCIENCE],
      attendance: 'FULL',
    };

    mockEmployeeRepository.findById.mockResolvedValue(expectedEmployee);

    // Act
    const result = await retrieveEmployeeImpl.execute('1');

    // Assert
    expect(mockEmployeeRepository.findById).toHaveBeenCalledWith('1');
    expect(result).toEqual(expectedEmployee);
  });
});
