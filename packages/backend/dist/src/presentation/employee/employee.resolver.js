"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const employee_1 = require("./graphql/employee");
const common_1 = require("@nestjs/common");
const usecase_factory_1 = require("../../infrastructure/factories/usecase.factory");
const employee_with_pagination_1 = require("./graphql/employee.with.pagination");
const employee_filter_input_1 = require("./graphql/employee.filter.input");
const employee_input_1 = require("./graphql/employee.input");
const node_crypto_1 = require("node:crypto");
const employee_update_input_1 = require("./graphql/employee.update.input");
const auth_guard_1 = require("../../shared/auth/auth.guard");
const role_guard_1 = require("../../shared/auth/role.guard");
let EmployeeResolver = class EmployeeResolver {
    constructor(useCaseFactory) {
        this.useCaseFactory = useCaseFactory;
    }
    async getEmployee(id) {
        return await this.useCaseFactory.retrieveEmployee.execute(id);
    }
    async listEmployees(page, limit) {
        return await this.useCaseFactory.listEmployeeWithPagination.execute(page, limit);
    }
    async findEmployees(filter) {
        return await this.useCaseFactory.listEmployeeWithFilters.execute({
            name: filter.name,
            age: filter.age,
            classes: filter.class,
        });
    }
    async addEmployee(input) {
        return await this.useCaseFactory.addEmployee.execute({
            id: (0, node_crypto_1.randomUUID)(),
            name: input.name,
            age: input.age,
            employeeClass: input.class,
            subjects: input.subjects,
            attendance: input.attendance,
        });
    }
    async updateEmployee(id, input) {
        return await this.useCaseFactory.updateEmployee.execute(id, {
            id: id,
            name: input.name,
            age: input.age,
            employeeClass: input.class,
            subjects: input.subjects,
            attendance: input.attendance,
        });
    }
};
exports.EmployeeResolver = EmployeeResolver;
__decorate([
    (0, common_1.UseGuards)(new role_guard_1.RoleGuard(['EMPLOYEE', 'ADMIN'])),
    (0, graphql_1.Query)(() => employee_1.Employee),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EmployeeResolver.prototype, "getEmployee", null);
__decorate([
    (0, common_1.UseGuards)(new role_guard_1.RoleGuard(['EMPLOYEE', 'ADMIN'])),
    (0, graphql_1.Query)(() => employee_with_pagination_1.EmployeeWithPagination),
    __param(0, (0, graphql_1.Args)('page', { type: () => Number, nullable: false })),
    __param(1, (0, graphql_1.Args)('limit', { type: () => Number, nullable: false })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], EmployeeResolver.prototype, "listEmployees", null);
__decorate([
    (0, common_1.UseGuards)(new role_guard_1.RoleGuard(['EMPLOYEE', 'ADMIN'])),
    (0, graphql_1.Query)(() => [employee_1.Employee]),
    __param(0, (0, graphql_1.Args)('filter', { type: () => employee_filter_input_1.EmployeeFilter })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [employee_filter_input_1.EmployeeFilter]),
    __metadata("design:returntype", Promise)
], EmployeeResolver.prototype, "findEmployees", null);
__decorate([
    (0, common_1.UseGuards)(new role_guard_1.RoleGuard(['ADMIN'])),
    (0, graphql_1.Mutation)(() => employee_1.Employee),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [employee_input_1.EmployeeInput]),
    __metadata("design:returntype", Promise)
], EmployeeResolver.prototype, "addEmployee", null);
__decorate([
    (0, common_1.UseGuards)(new role_guard_1.RoleGuard(['ADMIN'])),
    (0, graphql_1.Mutation)(() => employee_1.Employee),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, employee_update_input_1.EmployeeInputForUpdate]),
    __metadata("design:returntype", Promise)
], EmployeeResolver.prototype, "updateEmployee", null);
exports.EmployeeResolver = EmployeeResolver = __decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtGuard),
    (0, common_1.Injectable)(),
    (0, graphql_1.Resolver)(() => employee_1.Employee),
    __metadata("design:paramtypes", [usecase_factory_1.UsecaseFactory])
], EmployeeResolver);
//# sourceMappingURL=employee.resolver.js.map