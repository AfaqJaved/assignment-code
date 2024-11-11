import { User } from '../entities/User';
export interface UserRepository {
    findById(id: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
}
export declare const IUserRepository: unique symbol;