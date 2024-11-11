// test/repository.factory.test.ts
import { describe, it, expect, beforeEach } from 'vitest';
import { Test, TestingModule } from '@nestjs/testing';
import { RepositoryFactory } from './repository.factory';
import { InfrastructureModule } from '../infrastructure.module';

describe('RepositoryFactory', () => {
  let repositoryFactory: RepositoryFactory;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [InfrastructureModule],
    }).compile();

    repositoryFactory = module.get<RepositoryFactory>(RepositoryFactory);
  });

  it('should be defined', () => {
    expect(repositoryFactory).toBeDefined();
    expect(repositoryFactory.employeeRepository).toBeDefined();
    expect(repositoryFactory.userRepository).toBeDefined();
  });
});
