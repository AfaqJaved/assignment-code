import { Role } from '../enums';
export interface PaginationResult<T> {
    items: T[];
    totalItems: number;
    currentPage: number;
    totalPages: number;
    pageSize: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
}
export interface JwtPayload {
    id: string;
    role: Role;
    name: string;
}
