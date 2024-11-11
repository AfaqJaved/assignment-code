import { Module } from '@nestjs/common';
import { REPOSITORIES } from './repositories';
import { FACTORIES } from './factories';
import { APPLICATION_USECASES } from './usecases';

@Module({
  providers: [...REPOSITORIES, ...APPLICATION_USECASES, ...FACTORIES],
  exports: [...FACTORIES],
})
export class InfrastructureModule {}
