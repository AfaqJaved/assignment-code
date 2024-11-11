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
exports.UserResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const usecase_factory_1 = require("../../infrastructure/factories/usecase.factory");
const user_1 = require("./graphql/user");
const login_response_1 = require("./graphql/login.response");
const login_input_1 = require("./graphql/login.input");
let UserResolver = class UserResolver {
    constructor(useCaseFactory) {
        this.useCaseFactory = useCaseFactory;
    }
    async login(input) {
        return await this.useCaseFactory.loginUser.execute(input.email, input.password);
    }
};
exports.UserResolver = UserResolver;
__decorate([
    (0, graphql_1.Mutation)(() => login_response_1.LoginResponse),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_input_1.LoginInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "login", null);
exports.UserResolver = UserResolver = __decorate([
    (0, common_1.Injectable)(),
    (0, graphql_1.Resolver)(() => user_1.User),
    __metadata("design:paramtypes", [usecase_factory_1.UsecaseFactory])
], UserResolver);
//# sourceMappingURL=user.resolver.js.map