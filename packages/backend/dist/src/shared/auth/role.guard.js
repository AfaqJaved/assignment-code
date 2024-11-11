"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleGuard = void 0;
const security_context_1 = require("./security.context");
class RoleGuard {
    constructor(roles) {
        this.roles = roles;
    }
    canActivate() {
        console.log(security_context_1.SecurityContext.getInstance().payload.role);
        return this.roles.includes(security_context_1.SecurityContext.getInstance().payload.role);
    }
}
exports.RoleGuard = RoleGuard;
//# sourceMappingURL=role.guard.js.map