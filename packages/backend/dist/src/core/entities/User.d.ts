import { Role } from './enums';
export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    role: Role;
}
