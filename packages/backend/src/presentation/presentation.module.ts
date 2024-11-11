import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [EmployeeModule, UserModule],
})
export class PresentationModule {}
