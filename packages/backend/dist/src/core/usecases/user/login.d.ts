export interface LoginUser {
    execute(email: string, password: string): Promise<{
        token: string;
    }>;
}
export declare const ILoginUser: unique symbol;
