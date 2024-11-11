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
exports.EmployeeFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const enums_1 = require("../../../core/entities/enums");
let EmployeeFilter = class EmployeeFilter {
};
exports.EmployeeFilter = EmployeeFilter;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], EmployeeFilter.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], EmployeeFilter.prototype, "age", void 0);
__decorate([
    (0, graphql_1.Field)(() => enums_1.Class, { nullable: true }),
    __metadata("design:type", String)
], EmployeeFilter.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => enums_1.Subject, { nullable: true }),
    __metadata("design:type", String)
], EmployeeFilter.prototype, "subjects", void 0);
exports.EmployeeFilter = EmployeeFilter = __decorate([
    (0, graphql_1.InputType)()
], EmployeeFilter);
//# sourceMappingURL=employee.filter.input.js.map