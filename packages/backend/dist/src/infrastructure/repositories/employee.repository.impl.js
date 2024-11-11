"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeRepositoryImpl = void 0;
const enums_1 = require("../../core/entities/enums");
const common_1 = require("@nestjs/common");
let EmployeeRepositoryImpl = class EmployeeRepositoryImpl {
    constructor() {
        this.employees = [
            {
                id: '1',
                name: 'John Doe',
                employeeClass: enums_1.Class.DEVELOPER,
                age: 30,
                subjects: [enums_1.Subject.GEOGRAPHY],
                attendance: 'FULL',
            },
            {
                id: '2',
                name: 'Jane Smith',
                employeeClass: enums_1.Class.LEAD,
                age: 25,
                subjects: [enums_1.Subject.ENGLISH],
                attendance: 'PARTIAL',
            },
        ];
    }
    async findById(id) {
        const employee = this.employees.find((employee) => employee.id === id);
        return employee ? Promise.resolve(employee) : Promise.resolve(null);
    }
    async findAllByFilters(name, classes, age) {
        const filteredEmployees = this.employees.filter((employee) => employee.name.includes(name) ||
            JSON.stringify(employee.employeeClass) === JSON.stringify(classes) ||
            employee.age === age);
        return Promise.resolve(filteredEmployees);
    }
    findAllByPagination(page, limit) {
        const start = (page - 1) * limit;
        const end = start + limit;
        const paginatedEmployees = this.employees.slice(start, end);
        const totalItems = this.employees.length;
        const totalPages = Math.ceil(totalItems / limit);
        const hasPreviousPage = page > 1;
        const hasNextPage = page < totalPages;
        return Promise.resolve({
            items: paginatedEmployees,
            totalItems,
            currentPage: page,
            totalPages,
            pageSize: limit,
            hasPreviousPage,
            hasNextPage,
        });
    }
    async saveEmployee(employee) {
        this.employees.push(employee);
        return Promise.resolve(employee);
    }
    async updateEmployee(id, employee) {
        const index = this.employees.findIndex((e) => e.id === id);
        if (index !== -1) {
            this.employees[index] = { ...this.employees[index], ...employee };
            return Promise.resolve(this.employees[index]);
        }
        else {
            throw new common_1.HttpException('Employee Not Found', common_1.HttpStatus.NOT_FOUND);
        }
    }
};
exports.EmployeeRepositoryImpl = EmployeeRepositoryImpl;
exports.EmployeeRepositoryImpl = EmployeeRepositoryImpl = __decorate([
    (0, common_1.Injectable)()
], EmployeeRepositoryImpl);
//# sourceMappingURL=employee.repository.impl.js.map