import { beforeEach, describe, expect, it, vi } from 'vitest';
import { EmployeeResolver } from './employee.resolver';
import { UsecaseFactory } from '../../infrastructure/factories/usecase.factory';
import { EmployeeInputForUpdate } from './graphql/employee.update.input';
import { Class } from '../../core/entities/enums';

// Mock dependencies
const mockUsecaseFactory = {
  retrieveEmployee: {
    execute: vi.fn(),
  },
  listEmployeeWithPagination: {
    execute: vi.fn(),
  },
  listEmployeeWithFilters: {
    execute: vi.fn(),
  },
  addEmployee: {
    execute: vi.fn(),
  },
  updateEmployee: {
    execute: vi.fn(),
  },
};

describe('EmployeeResolver', () => {
  let resolver: EmployeeResolver;

  beforeEach(() => {
    resolver = new EmployeeResolver(
      mockUsecaseFactory as unknown as UsecaseFactory,
    );
  });

  it('should retrieve an employee by id', async () => {
    const id = 'employee-id';
    const employee = { id, name: 'John Doe', age: 30, employeeClass: 'A1' };
    mockUsecaseFactory.retrieveEmployee.execute.mockResolvedValue(employee);

    const result = await resolver.getEmployee(id);
    expect(result).toEqual(employee);
    expect(mockUsecaseFactory.retrieveEmployee.execute).toHaveBeenCalledWith(
      id,
    );
  });

  it('should list employees with pagination', async () => {
    const page = 1;
    const limit = 10;
    const paginationResult = { data: [], total: 0 };
    mockUsecaseFactory.listEmployeeWithPagination.execute.mockResolvedValue(
      paginationResult,
    );

    const result = await resolver.listEmployees(page, limit);
    expect(result).toEqual(paginationResult);
    expect(
      mockUsecaseFactory.listEmployeeWithPagination.execute,
    ).toHaveBeenCalledWith(page, limit);
  });

  it('should find employees by filter', async () => {
    const filter = { name: 'John', age: 30, class: 'A1' };
    const filteredEmployees = [{ id: '1', name: 'John Doe' }];
    mockUsecaseFactory.listEmployeeWithFilters.execute.mockResolvedValue(
      filteredEmployees,
    );

    const result = await resolver.findEmployees(filter as any);
    expect(result).toEqual(filteredEmployees);
    expect(
      mockUsecaseFactory.listEmployeeWithFilters.execute,
    ).toHaveBeenCalledWith({
      name: filter.name,
      age: filter.age,
      classes: filter.class,
    });
  });

  it('should add an employee', async () => {
    const input: EmployeeInputForUpdate = {
      name: 'John Updated',
      age: 31,
      class: Class.DEVELOPER,
      subjects: [],
      attendance: 'FULL',
    };
    const newEmployee = { ...input, id: 'new-id' };
    mockUsecaseFactory.addEmployee.execute.mockResolvedValue(newEmployee);

    const result = await resolver.addEmployee(input);
    expect(result).toEqual(newEmployee);
    expect(mockUsecaseFactory.addEmployee.execute).toHaveBeenCalledWith(
      expect.objectContaining({
        name: input.name,
        age: input.age,
        employeeClass: input.class,
        subjects: input.subjects,
        attendance: input.attendance,
      }),
    );
  });

  it('should update an employee', async () => {
    const id = 'employee-id';
    const input: EmployeeInputForUpdate = {
      name: 'John Updated',
      age: 31,
      class: Class.DEVELOPER,
      subjects: [],
      attendance: 'FULL',
    };
    const updatedEmployee = { ...input, id };
    mockUsecaseFactory.updateEmployee.execute.mockResolvedValue(
      updatedEmployee,
    );

    const result = await resolver.updateEmployee(id, input);
    expect(result).toEqual(updatedEmployee);
    expect(mockUsecaseFactory.updateEmployee.execute).toHaveBeenCalledWith(
      id,
      expect.objectContaining({
        name: input.name,
        age: input.age,
        employeeClass: input.class,
        subjects: input.subjects,
        attendance: input.attendance,
      }),
    );
  });
});
