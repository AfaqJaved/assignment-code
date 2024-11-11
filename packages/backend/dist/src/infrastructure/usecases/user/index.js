"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USER_USECASES = void 0;
const login_1 = require("../../../core/usecases/user/login");
const login_impl_1 = require("./login.impl");
exports.USER_USECASES = [{ provide: login_1.ILoginUser, useClass: login_impl_1.LoginImpl }];
//# sourceMappingURL=index.js.map