import { Attendance, Class, Subject } from '../../../core/entities/enums';
export declare class EmployeeInput {
    name: string;
    age: number;
    class: Class;
    subjects: Subject[];
    attendance: Attendance;
}
