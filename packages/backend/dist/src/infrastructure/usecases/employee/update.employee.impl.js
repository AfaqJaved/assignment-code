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
exports.UpdateEmployeeImpl = void 0;
const common_1 = require("@nestjs/common");
const repository_factory_1 = require("../../factories/repository.factory");
let UpdateEmployeeImpl = class UpdateEmployeeImpl {
    constructor(repoFactory) {
        this.repoFactory = repoFactory;
    }
    execute(id, employee) {
        return this.repoFactory.employeeRepository.updateEmployee(id, employee);
    }
};
exports.UpdateEmployeeImpl = UpdateEmployeeImpl;
exports.UpdateEmployeeImpl = UpdateEmployeeImpl = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repository_factory_1.RepositoryFactory])
], UpdateEmployeeImpl);
//# sourceMappingURL=update.employee.impl.js.map