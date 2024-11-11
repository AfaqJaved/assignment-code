import { beforeEach, describe, expect, it, vi } from 'vitest';
import { Employee } from '../../../core/entities/Employee';
import { Class, Subject } from '../../../core/entities/enums';
import { RepositoryFactory } from '../../factories/repository.factory';
import { ListEmployeeWithFilterImpl } from './list.employee.with.filter.impl';

// Mock data
const mockEmployees: Employee[] = [
  {
    id: '1',
    name: 'John Doe',
    age: 30,
    employeeClass: Class.DEVELOPER,
    subjects: [Subject.GEOGRAPHY],
    attendance: 'FULL',
  },
  {
    id: '2',
    name: 'Jane Doe',
    age: 25,
    employeeClass: Class.LEAD,
    subjects: [Subject.ENGLISH],
    attendance: 'PARTIAL',
  },
];

describe('ListEmployeeWithFilterImpl', () => {
  let service: ListEmployeeWithFilterImpl;
  let repositoryFactory: RepositoryFactory;

  beforeEach(() => {
    repositoryFactory = {
      employeeRepository: {
        findAllByFilters: vi.fn().mockResolvedValue(mockEmployees),
      },
    } as unknown as RepositoryFactory;

    service = new ListEmployeeWithFilterImpl(repositoryFactory);
  });

  it('should return employees matching filters', async () => {
    const filters = { name: 'Doe', age: 30, classes: Class.DEVELOPER };
    const result = await service.execute(filters);

    expect(
      repositoryFactory.employeeRepository.findAllByFilters,
    ).toHaveBeenCalledWith(filters.name, filters.classes, filters.age);
    expect(result).toEqual(mockEmployees);
  });
});
