import { EmployeeRepository } from '../../core/repositories/employee.repository';
import { Employee } from '../../core/entities/Employee';
import { Class, Subject } from '../../core/entities/enums';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PaginationResult } from '../../core/entities/types';

@Injectable()
export class EmployeeRepositoryImpl implements EmployeeRepository {
  private employees: Employee[] = [
    {
      id: '1',
      name: 'John Doe',
      employeeClass: Class.DEVELOPER,
      age: 30,
      subjects: [Subject.GEOGRAPHY],
      attendance: 'FULL',
    },
    {
      id: '2',
      name: 'Jane Smith',
      employeeClass: Class.LEAD,
      age: 25,
      subjects: [Subject.ENGLISH],
      attendance: 'PARTIAL',
    },
  ];

  async findById(id: string): Promise<Employee | null> {
    const employee = this.employees.find((employee) => employee.id === id);
    return employee ? Promise.resolve(employee) : Promise.resolve(null);
  }

  async findAllByFilters(
    name: string,
    classes: Class,
    age: number,
  ): Promise<Employee[]> {
    const filteredEmployees = this.employees.filter(
      (employee) =>
        employee.name.includes(name) ||
        JSON.stringify(employee.employeeClass) === JSON.stringify(classes) ||
        employee.age === age,
    );
    return Promise.resolve(filteredEmployees);
  }

  findAllByPagination(
    page: number,
    limit: number,
  ): Promise<PaginationResult<Employee>> {
    const start = (page - 1) * limit;
    const end = start + limit;
    const paginatedEmployees = this.employees.slice(start, end);

    const totalItems = this.employees.length;
    const totalPages = Math.ceil(totalItems / limit);
    const hasPreviousPage = page > 1;
    const hasNextPage = page < totalPages;

    return Promise.resolve({
      items: paginatedEmployees,
      totalItems,
      currentPage: page,
      totalPages,
      pageSize: limit,
      hasPreviousPage,
      hasNextPage,
    });
  }

  async saveEmployee(employee: Employee): Promise<Employee> {
    this.employees.push(employee);
    return Promise.resolve(employee);
  }

  async updateEmployee(id: string, employee: Employee): Promise<Employee> {
    const index = this.employees.findIndex((e) => e.id === id);
    if (index !== -1) {
      this.employees[index] = { ...this.employees[index], ...employee };
      return Promise.resolve(this.employees[index]);
    } else {
      throw new HttpException('Employee Not Found', HttpStatus.NOT_FOUND);
    }
  }
}
