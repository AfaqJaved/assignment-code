"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EMPLOYEE_USECASES = void 0;
const add_employee_1 = require("../../../core/usecases/employee/add.employee");
const add_employee_impl_1 = require("./add.employee.impl");
const update_employee_1 = require("../../../core/usecases/employee/update.employee");
const update_employee_impl_1 = require("./update.employee.impl");
const list_employee_with_filters_1 = require("../../../core/usecases/employee/list.employee.with.filters");
const list_employee_with_filter_impl_1 = require("./list.employee.with.filter.impl");
const list_employee_with_pagination_1 = require("../../../core/usecases/employee/list.employee.with.pagination");
const list_employee_with_pagination_impl_1 = require("./list.employee.with.pagination.impl");
const retrieve_employee_1 = require("../../../core/usecases/employee/retrieve.employee");
const retrieve_employee_impl_1 = require("./retrieve.employee.impl");
exports.EMPLOYEE_USECASES = [
    { provide: add_employee_1.IAddEmployee, useClass: add_employee_impl_1.AddEmployeeImpl },
    { provide: update_employee_1.IUpdateEmployee, useClass: update_employee_impl_1.UpdateEmployeeImpl },
    { provide: list_employee_with_filters_1.IListEmployeeWithFilters, useClass: list_employee_with_filter_impl_1.ListEmployeeWithFilterImpl },
    {
        provide: list_employee_with_pagination_1.IListEmployeeWithPagination,
        useClass: list_employee_with_pagination_impl_1.ListEmployeeWithPaginationImpl,
    },
    { provide: retrieve_employee_1.IRetrieveEmployee, useClass: retrieve_employee_impl_1.RetrieveEmployeeImpl },
];
//# sourceMappingURL=index.js.map