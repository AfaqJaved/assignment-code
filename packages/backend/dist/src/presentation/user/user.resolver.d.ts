import { UsecaseFactory } from '../../infrastructure/factories/usecase.factory';
import { LoginInput } from './graphql/login.input';
export declare class UserResolver {
    private readonly useCaseFactory;
    constructor(useCaseFactory: UsecaseFactory);
    login(input: LoginInput): Promise<{
        token: string;
    }>;
}
