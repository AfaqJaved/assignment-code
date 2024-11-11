import  { FC } from 'react';
import Button from './Button.tsx';
import { ArrowLeft, X } from 'lucide-react';
import { Employee } from '../models/Employee.ts';

interface EmployeeDetailsProps {
  employee: Employee;
  onClose: () => void;
}

const EmployeeDetails: FC<EmployeeDetailsProps> = ({ employee, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
    <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h2 className="text-2xl font-bold text-gray-900">{employee.name}</h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <img src={employee.picture} alt={employee.name} className="w-full rounded-lg" />
          </div>
          <div>
            <p><strong>Email:</strong>{employee.email}</p>
            <p><strong>Phone:</strong> {employee.phone}</p>
            <p><strong>Location:</strong> {employee.location}</p>
            <p><strong>Date of Birth:</strong> {employee.dob}</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-6 py-4 flex justify-end">
        <Button onClick={onClose}>
          <div className={'flex items-center'}>
            <ArrowLeft className="mr-2 h-4 w-6" />
            Back to List
          </div>
        </Button>
      </div>
    </div>
  </div>
);

export default EmployeeDetails;