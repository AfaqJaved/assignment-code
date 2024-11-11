import { Attendance, Class, Subject } from '../../../core/entities/enums';
export declare class EmployeeInputForUpdate {
    name: string;
    age: number;
    class: Class;
    subjects: Subject[];
    attendance: Attendance;
}
