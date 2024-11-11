"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityContext = void 0;
class SecurityContext {
    constructor() {
    }
    static getInstance() {
        if (!SecurityContext.instance) {
            SecurityContext.instance = new SecurityContext();
        }
        return SecurityContext.instance;
    }
}
exports.SecurityContext = SecurityContext;
SecurityContext.instance = null;
//# sourceMappingURL=security.context.js.map