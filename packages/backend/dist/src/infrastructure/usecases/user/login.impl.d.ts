import { RepositoryFactory } from '../../factories/repository.factory';
import { LoginUser } from '../../../core/usecases/user/login';
import { JwtPayload } from '../../../core/entities/types';
export declare class LoginImpl implements LoginUser {
    private readonly repoFactory;
    constructor(repoFactory: RepositoryFactory);
    execute(email: string, password: string): Promise<{
        token: string;
    }>;
    generateToken(payload: JwtPayload): Promise<string>;
}
