import { Attendance, Class, Subject } from './enums';

export interface Employee {
  id: string;
  name: string;
  age: number;
  employeeClass: Class;
  subjects: Subject[];
  attendance: Attendance;
}
