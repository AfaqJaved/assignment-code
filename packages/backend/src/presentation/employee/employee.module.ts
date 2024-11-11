import { Module } from '@nestjs/common';
import { EmployeeResolver } from './employee.resolver';
import { InfrastructureModule } from '../../infrastructure/infrastructure.module';

@Module({
  providers: [EmployeeResolver],
  imports: [InfrastructureModule],
})
export class EmployeeModule {}
