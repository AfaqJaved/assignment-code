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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeWithPagination = void 0;
const graphql_1 = require("@nestjs/graphql");
const employee_1 = require("./employee");
let EmployeeWithPagination = class EmployeeWithPagination {
};
exports.EmployeeWithPagination = EmployeeWithPagination;
__decorate([
    (0, graphql_1.Field)(() => Number),
    __metadata("design:type", Number)
], EmployeeWithPagination.prototype, "totalItems", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number),
    __metadata("design:type", Number)
], EmployeeWithPagination.prototype, "currentPage", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number),
    __metadata("design:type", Number)
], EmployeeWithPagination.prototype, "totalPages", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number),
    __metadata("design:type", Number)
], EmployeeWithPagination.prototype, "pageSize", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean),
    __metadata("design:type", Number)
], EmployeeWithPagination.prototype, "hasPreviousPage", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean),
    __metadata("design:type", Number)
], EmployeeWithPagination.prototype, "hasNextPage", void 0);
__decorate([
    (0, graphql_1.Field)(() => [employee_1.Employee], { nullable: true }),
    __metadata("design:type", Array)
], EmployeeWithPagination.prototype, "items", void 0);
exports.EmployeeWithPagination = EmployeeWithPagination = __decorate([
    (0, graphql_1.ObjectType)()
], EmployeeWithPagination);
//# sourceMappingURL=employee.with.pagination.js.map