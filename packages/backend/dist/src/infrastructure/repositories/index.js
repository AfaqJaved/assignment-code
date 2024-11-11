"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REPOSITORIES = void 0;
const employee_repository_impl_1 = require("./employee.repository.impl");
const employee_repository_1 = require("../../core/repositories/employee.repository");
const user_repository_impl_1 = require("./user.repository.impl");
const user_repository_1 = require("../../core/repositories/user.repository");
exports.REPOSITORIES = [
    {
        useClass: employee_repository_impl_1.EmployeeRepositoryImpl,
        provide: employee_repository_1.IEmployeeRepository,
    },
    {
        useClass: user_repository_impl_1.UserRepositoryImpl,
        provide: user_repository_1.IUserRepository,
    },
];
//# sourceMappingURL=index.js.map