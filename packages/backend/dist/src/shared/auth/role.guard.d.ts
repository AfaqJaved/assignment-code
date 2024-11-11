import { CanActivate } from '@nestjs/common';
import { Role } from '../../core/entities/enums';
export declare class RoleGuard implements CanActivate {
    private readonly roles;
    constructor(roles: Role[]);
    canActivate(): boolean;
}
