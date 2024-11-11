import { describe, it, expect } from 'vitest';
import { Class, Subject } from '../../core/entities/enums';
import { HttpException, HttpStatus } from '@nestjs/common';
import { Employee } from '../../core/entities/Employee';
import { EmployeeRepositoryImpl } from './employee.repository.impl';

describe('EmployeeRepositoryImpl', () => {
  let employeeRepository: EmployeeRepositoryImpl;

  beforeEach(() => {
    employeeRepository = new EmployeeRepositoryImpl();
  });

  it('should find an employee by id', async () => {
    const employee = await employeeRepository.findById('1');
    expect(employee).toBeTruthy();
    expect(employee?.id).toBe('1');
  });

  it('should return null if employee not found by id', async () => {
    const employee = await employeeRepository.findById('999');
    expect(employee).toBeNull();
  });

  it('should find employees by filters', async () => {
    const employees = await employeeRepository.findAllByFilters(
      'John',
      Class.DEVELOPER,
      30,
    );
    expect(employees).toHaveLength(1);
    expect(employees[0].name).toBe('John Doe');
  });

  it('should return paginated employees', async () => {
    const paginatedResult = await employeeRepository.findAllByPagination(1, 1);
    expect(paginatedResult.items).toHaveLength(1);
    expect(paginatedResult.totalItems).toBe(2);
    expect(paginatedResult.totalPages).toBe(2);
    expect(paginatedResult.currentPage).toBe(1);
    expect(paginatedResult.pageSize).toBe(1);
    expect(paginatedResult.hasPreviousPage).toBe(false);
    expect(paginatedResult.hasNextPage).toBe(true);
  });

  it('should save a new employee', async () => {
    const newEmployee: Employee = {
      id: '3',
      name: 'Alice Johnson',
      employeeClass: Class.DEVELOPER,
      age: 28,
      subjects: [Subject.MATH],
      attendance: 'FULL',
    };
    const savedEmployee = await employeeRepository.saveEmployee(newEmployee);
    expect(savedEmployee).toEqual(newEmployee);

    const employee = await employeeRepository.findById('3');
    expect(employee).toEqual(newEmployee);
  });

  it('should update an existing employee', async () => {
    const updatedEmployee: Employee = {
      id: '1',
      name: 'John Doe Updated',
      employeeClass: Class.DEVELOPER,
      age: 31,
      subjects: [Subject.GEOGRAPHY],
      attendance: 'FULL',
    };
    const employee = await employeeRepository.updateEmployee(
      '1',
      updatedEmployee,
    );
    expect(employee.name).toBe('John Doe Updated');
    expect(employee.age).toBe(31);
  });

  it('should throw exception when updating non-existing employee', async () => {
    const updatedEmployee: Employee = {
      id: '999',
      name: 'Non Existing',
      employeeClass: Class.DEVELOPER,
      age: 31,
      subjects: [Subject.MATH],
      attendance: 'FULL',
    };

    await expect(
      employeeRepository.updateEmployee('999', updatedEmployee),
    ).rejects.toThrowError(
      new HttpException('Employee Not Found', HttpStatus.NOT_FOUND),
    );
  });
});
