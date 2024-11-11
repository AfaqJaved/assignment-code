import { JwtPayload } from '../../core/entities/types';

export class SecurityContext {
  private static instance: SecurityContext | null = null;
  public payload: JwtPayload;

  private constructor() {
    // Private constructor to prevent instantiation
  }

  static getInstance(): SecurityContext {
    // If an instance doesn't exist, create one; otherwise, return the existing instance
    if (!SecurityContext.instance) {
      SecurityContext.instance = new SecurityContext();
    }
    return SecurityContext.instance;
  }
}
