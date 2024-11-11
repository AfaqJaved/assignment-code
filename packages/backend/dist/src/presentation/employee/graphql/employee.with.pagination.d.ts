import { Employee } from './employee';
export declare class EmployeeWithPagination {
    totalItems: number;
    currentPage: number;
    totalPages: number;
    pageSize: number;
    hasPreviousPage: number;
    hasNextPage: number;
    items: Employee[];
}
