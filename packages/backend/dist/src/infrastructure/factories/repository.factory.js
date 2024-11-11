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
exports.RepositoryFactory = void 0;
const common_1 = require("@nestjs/common");
const employee_repository_1 = require("../../core/repositories/employee.repository");
const user_repository_1 = require("../../core/repositories/user.repository");
let RepositoryFactory = class RepositoryFactory {
};
exports.RepositoryFactory = RepositoryFactory;
__decorate([
    (0, common_1.Inject)(employee_repository_1.IEmployeeRepository),
    __metadata("design:type", Object)
], RepositoryFactory.prototype, "employeeRepository", void 0);
__decorate([
    (0, common_1.Inject)(user_repository_1.IUserRepository),
    __metadata("design:type", Object)
], RepositoryFactory.prototype, "userRepository", void 0);
exports.RepositoryFactory = RepositoryFactory = __decorate([
    (0, common_1.Injectable)()
], RepositoryFactory);
//# sourceMappingURL=repository.factory.js.map