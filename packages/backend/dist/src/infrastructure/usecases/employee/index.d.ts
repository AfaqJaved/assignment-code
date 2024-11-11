import { AddEmployeeImpl } from './add.employee.impl';
import { UpdateEmployeeImpl } from './update.employee.impl';
import { ListEmployeeWithFilterImpl } from './list.employee.with.filter.impl';
import { ListEmployeeWithPaginationImpl } from './list.employee.with.pagination.impl';
import { RetrieveEmployeeImpl } from './retrieve.employee.impl';
export declare const EMPLOYEE_USECASES: ({
    provide: symbol;
    useClass: typeof AddEmployeeImpl;
} | {
    provide: symbol;
    useClass: typeof UpdateEmployeeImpl;
} | {
    provide: symbol;
    useClass: typeof ListEmployeeWithFilterImpl;
} | {
    provide: symbol;
    useClass: typeof ListEmployeeWithPaginationImpl;
} | {
    provide: symbol;
    useClass: typeof RetrieveEmployeeImpl;
})[];
