"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepositoryImpl = void 0;
const common_1 = require("@nestjs/common");
let UserRepositoryImpl = class UserRepositoryImpl {
    constructor() {
        this.users = [
            {
                id: '1',
                name: 'Afaq Javed',
                email: 'admin@test.com',
                password: 'admin',
                role: 'ADMIN',
            },
            {
                id: '2',
                name: 'Asad Javed',
                email: 'employee@test.com',
                password: 'employee',
                role: 'EMPLOYEE',
            },
        ];
    }
    findById(id) {
        const user = this.users.find((user) => user.id === id);
        return user ? Promise.resolve(user) : Promise.resolve(null);
    }
    findByEmail(email) {
        const userFound = this.users.find((user) => user.email === email);
        return Promise.resolve(userFound);
    }
};
exports.UserRepositoryImpl = UserRepositoryImpl;
exports.UserRepositoryImpl = UserRepositoryImpl = __decorate([
    (0, common_1.Injectable)()
], UserRepositoryImpl);
//# sourceMappingURL=user.repository.impl.js.map