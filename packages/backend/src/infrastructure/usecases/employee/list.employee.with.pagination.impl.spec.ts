// listEmployeeWithPaginationImpl.spec.ts
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { RepositoryFactory } from '../../factories/repository.factory';
import { Employee } from 'src/core/entities/Employee';
import { ListEmployeeWithPaginationImpl } from './list.employee.with.pagination.impl';

const createMockRepositoryFactory = () => ({
  employeeRepository: {
    findAllByPagination: vi.fn(),
  },
});

describe('ListEmployeeWithPaginationImpl', () => {
  let listEmployee: ListEmployeeWithPaginationImpl;
  let mockRepoFactory: ReturnType<typeof createMockRepositoryFactory>;

  beforeEach(() => {
    mockRepoFactory = createMockRepositoryFactory();
    listEmployee = new ListEmployeeWithPaginationImpl(
      mockRepoFactory as unknown as RepositoryFactory,
    );
  });

  it('should call employeeRepository.findAllByPagination with the correct parameters', async () => {
    const page = 1;
    const limit = 10;
    const expectedResult: PaginationResult<Employee> = {
      items: [],
      totalPages: 0,
      currentPage: page,
      hasNextPage: false,
      hasPreviousPage: false,
      pageSize: 1,
      totalItems: 10,
    };

    mockRepoFactory.employeeRepository.findAllByPagination.mockResolvedValue(
      expectedResult,
    );

    const result = await listEmployee.execute(page, limit);

    expect(
      mockRepoFactory.employeeRepository.findAllByPagination,
    ).toHaveBeenCalledWith(page, limit);
    expect(result).toBe(expectedResult);
  });
});
