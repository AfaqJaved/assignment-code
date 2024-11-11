import { Class, Subject } from '../../../core/entities/enums';
export declare class Employee {
    id: string;
    name?: string;
    age?: number;
    class?: Class;
    subjects?: Subject[];
    attendance?: string;
}
