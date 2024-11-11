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
exports.UsecaseFactory = void 0;
const common_1 = require("@nestjs/common");
const add_employee_1 = require("../../core/usecases/employee/add.employee");
const update_employee_1 = require("../../core/usecases/employee/update.employee");
const list_employee_with_filters_1 = require("../../core/usecases/employee/list.employee.with.filters");
const list_employee_with_pagination_1 = require("../../core/usecases/employee/list.employee.with.pagination");
const retrieve_employee_1 = require("../../core/usecases/employee/retrieve.employee");
const login_1 = require("../../core/usecases/user/login");
let UsecaseFactory = class UsecaseFactory {
};
exports.UsecaseFactory = UsecaseFactory;
__decorate([
    (0, common_1.Inject)(add_employee_1.IAddEmployee),
    __metadata("design:type", Object)
], UsecaseFactory.prototype, "addEmployee", void 0);
__decorate([
    (0, common_1.Inject)(update_employee_1.IUpdateEmployee),
    __metadata("design:type", Object)
], UsecaseFactory.prototype, "updateEmployee", void 0);
__decorate([
    (0, common_1.Inject)(list_employee_with_filters_1.IListEmployeeWithFilters),
    __metadata("design:type", Object)
], UsecaseFactory.prototype, "listEmployeeWithFilters", void 0);
__decorate([
    (0, common_1.Inject)(list_employee_with_pagination_1.IListEmployeeWithPagination),
    __metadata("design:type", Object)
], UsecaseFactory.prototype, "listEmployeeWithPagination", void 0);
__decorate([
    (0, common_1.Inject)(retrieve_employee_1.IRetrieveEmployee),
    __metadata("design:type", Object)
], UsecaseFactory.prototype, "retrieveEmployee", void 0);
__decorate([
    (0, common_1.Inject)(login_1.ILoginUser),
    __metadata("design:type", Object)
], UsecaseFactory.prototype, "loginUser", void 0);
exports.UsecaseFactory = UsecaseFactory = __decorate([
    (0, common_1.Injectable)()
], UsecaseFactory);
//# sourceMappingURL=usecase.factory.js.map