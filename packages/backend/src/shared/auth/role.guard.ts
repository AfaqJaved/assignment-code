import { CanActivate } from '@nestjs/common';
import { Role } from '../../core/entities/enums';
import { SecurityContext } from './security.context';

export class RoleGuard implements CanActivate {
  constructor(private readonly roles: Role[]) {}

  canActivate(): boolean {
    console.log(SecurityContext.getInstance().payload.role);
    return this.roles.includes(SecurityContext.getInstance().payload.role);
  }
}
