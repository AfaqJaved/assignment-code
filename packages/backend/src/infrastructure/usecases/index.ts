import { EMPLOYEE_USECASES } from './employee';
import { USER_USECASES } from './user';

export const APPLICATION_USECASES = [...EMPLOYEE_USECASES, ...USER_USECASES];
