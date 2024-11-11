// test/repository.factory.test.ts
import { describe, it, expect, beforeEach } from 'vitest';
import { Test, TestingModule } from '@nestjs/testing';
import { InfrastructureModule } from '../infrastructure.module';
import { UsecaseFactory } from './usecase.factory';

describe('UseCase Factory', () => {
  let usecaseFactory: UsecaseFactory;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [InfrastructureModule],
    }).compile();

    usecaseFactory = module.get<UsecaseFactory>(UsecaseFactory);
  });

  it('should be defined', () => {
    expect(usecaseFactory).toBeDefined();
    expect(usecaseFactory.listEmployeeWithFilters).toBeDefined();
    expect(usecaseFactory.listEmployeeWithPagination).toBeDefined();
    expect(usecaseFactory.addEmployee).toBeDefined();
    expect(usecaseFactory.updateEmployee).toBeDefined();
    expect(usecaseFactory.retrieveEmployee).toBeDefined();
  });
});
