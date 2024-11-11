import { JwtPayload } from '../../core/entities/types';
export declare class SecurityContext {
    private static instance;
    payload: JwtPayload;
    private constructor();
    static getInstance(): SecurityContext;
}
