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
exports.Employee = void 0;
const graphql_1 = require("@nestjs/graphql");
const enums_1 = require("../../../core/entities/enums");
(0, graphql_1.registerEnumType)(enums_1.Class, { name: 'Class' });
(0, graphql_1.registerEnumType)(enums_1.Subject, { name: 'Subject' });
let Employee = class Employee {
};
exports.Employee = Employee;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", String)
], Employee.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Employee.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], Employee.prototype, "age", void 0);
__decorate([
    (0, graphql_1.Field)(() => enums_1.Class, { nullable: true }),
    __metadata("design:type", String)
], Employee.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => [enums_1.Subject], { nullable: true }),
    __metadata("design:type", Array)
], Employee.prototype, "subjects", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Employee.prototype, "attendance", void 0);
exports.Employee = Employee = __decorate([
    (0, graphql_1.ObjectType)()
], Employee);
//# sourceMappingURL=employee.js.map