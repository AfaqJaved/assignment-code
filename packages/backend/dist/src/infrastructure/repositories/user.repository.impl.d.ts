import { UserRepository } from '../../core/repositories/user.repository';
import { User } from '../../core/entities/User';
export declare class UserRepositoryImpl implements UserRepository {
    private users;
    findById(id: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
}
