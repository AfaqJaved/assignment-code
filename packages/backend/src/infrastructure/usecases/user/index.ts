import { ILoginUser } from '../../../core/usecases/user/login';
import { LoginImpl } from './login.impl';

export const USER_USECASES = [{ provide: ILoginUser, useClass: LoginImpl }];
