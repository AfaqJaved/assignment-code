"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtGuard = void 0;
const common_1 = require("@nestjs/common");
const jsonwebtoken_1 = require("jsonwebtoken");
const app_module_1 = require("../../app.module");
const security_context_1 = require("./security.context");
const graphql_1 = require("@nestjs/graphql");
class JwtGuard {
    canActivate(context) {
        const ctx = graphql_1.GqlExecutionContext.create(context);
        if (!ctx.getContext().req.headers.authorization)
            throw new common_1.HttpException('UnAuthorized', common_1.HttpStatus.UNAUTHORIZED);
        const token = ctx.getContext().req.headers.authorization.split(' ')[1];
        security_context_1.SecurityContext.getInstance().payload = (0, jsonwebtoken_1.verify)(token, app_module_1.JWT_SECRET_KEY);
        return true;
    }
}
exports.JwtGuard = JwtGuard;
//# sourceMappingURL=auth.guard.js.map