// test/factories.test.ts
import { describe, it, expect } from 'vitest';
import { FACTORIES } from './index';
import { RepositoryFactory } from './repository.factory';
import { UsecaseFactory } from './usecase.factory';

describe('FACTORIES ARRAY', () => {
  it('should contain RepositoryFactory and use case factory ', () => {
    expect(FACTORIES).toContain(RepositoryFactory);
    expect(FACTORIES).toContain(UsecaseFactory);
  });
});
