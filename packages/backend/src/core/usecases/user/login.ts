export interface LoginUser {
  execute(email: string, password: string): Promise<{ token: string }>;
}

export const ILoginUser = Symbol('LoginUser');
