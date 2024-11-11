export declare const APPLICATION_USECASES: ({
    provide: symbol;
    useClass: typeof import("./employee/add.employee.impl").AddEmployeeImpl;
} | {
    provide: symbol;
    useClass: typeof import("./employee/update.employee.impl").UpdateEmployeeImpl;
} | {
    provide: symbol;
    useClass: typeof import("./employee/list.employee.with.filter.impl").ListEmployeeWithFilterImpl;
} | {
    provide: symbol;
    useClass: typeof import("./employee/list.employee.with.pagination.impl").ListEmployeeWithPaginationImpl;
} | {
    provide: symbol;
    useClass: typeof import("./employee/retrieve.employee.impl").RetrieveEmployeeImpl;
} | {
    provide: symbol;
    useClass: typeof import("./user/login.impl").LoginImpl;
})[];
