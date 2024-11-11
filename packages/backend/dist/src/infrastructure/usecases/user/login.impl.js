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
exports.LoginImpl = void 0;
const common_1 = require("@nestjs/common");
const repository_factory_1 = require("../../factories/repository.factory");
const jsonwebtoken_1 = require("jsonwebtoken");
const app_module_1 = require("../../../app.module");
let LoginImpl = class LoginImpl {
    constructor(repoFactory) {
        this.repoFactory = repoFactory;
    }
    async execute(email, password) {
        const userFound = await this.repoFactory.userRepository.findByEmail(email);
        if (userFound === null || userFound.password !== password)
            throw new common_1.HttpException('Invalid Credentials', common_1.HttpStatus.UNAUTHORIZED);
        const token = await this.generateToken({
            id: userFound.id,
            role: userFound.role,
            name: userFound.name,
        });
        return { token };
    }
    async generateToken(payload) {
        return (0, jsonwebtoken_1.sign)(payload, app_module_1.JWT_SECRET_KEY);
    }
};
exports.LoginImpl = LoginImpl;
exports.LoginImpl = LoginImpl = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repository_factory_1.RepositoryFactory])
], LoginImpl);
//# sourceMappingURL=login.impl.js.map