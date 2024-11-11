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
exports.EmployeeInputForUpdate = void 0;
const graphql_1 = require("@nestjs/graphql");
const enums_1 = require("../../../core/entities/enums");
let EmployeeInputForUpdate = class EmployeeInputForUpdate {
};
exports.EmployeeInputForUpdate = EmployeeInputForUpdate;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], EmployeeInputForUpdate.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Number)
], EmployeeInputForUpdate.prototype, "age", void 0);
__decorate([
    (0, graphql_1.Field)(() => enums_1.Class, { nullable: true }),
    __metadata("design:type", String)
], EmployeeInputForUpdate.prototype, "class", void 0);
__decorate([
    (0, graphql_1.Field)(() => [enums_1.Subject], { nullable: true }),
    __metadata("design:type", Array)
], EmployeeInputForUpdate.prototype, "subjects", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], EmployeeInputForUpdate.prototype, "attendance", void 0);
exports.EmployeeInputForUpdate = EmployeeInputForUpdate = __decorate([
    (0, graphql_1.InputType)()
], EmployeeInputForUpdate);
//# sourceMappingURL=employee.update.input.js.map