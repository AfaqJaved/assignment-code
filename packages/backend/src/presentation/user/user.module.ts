import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { InfrastructureModule } from '../../infrastructure/infrastructure.module';

@Module({
  imports: [InfrastructureModule],
  providers: [UserResolver],
})
export class UserModule {}
