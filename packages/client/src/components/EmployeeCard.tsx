import React, { FC } from 'react';
import Button from './Button.tsx';
import { Edit, Flag, Trash2 } from 'lucide-react';
import { Employee } from '../models/Employee.ts';

interface EmployeeCardProps {
  employee: Employee;
  onClick: () => void;
}

const EmployeeCard: FC<EmployeeCardProps> = ({ employee, onClick }) => (
  <div className="bg-white overflow-hidden shadow rounded-lg">
    <div className="p-6">
      <div className="flex items-center">
        <img className="h-12 w-12 rounded-full" src={employee.picture} alt="" />
        <div className="ml-4">
          <h3 className="text-lg font-medium text-gray-900">{employee.name}</h3>
          <p className="text-sm text-gray-500">{employee.email}</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm text-gray-500">{employee.location}</p>
      </div>


    </div>
    <div className="bg-blue-500 text-white px-4 py-4 sm:px-6 flex justify-start items-center">
      <Button variant="outline" onClick={onClick}>View Details</Button>
      <div className={"ml-auto flex"}>
        <Edit className="mr-2 h-4 w-4" />
        <Flag className="mr-2 h-4 w-4" />
        <Trash2 className="mr-2 h-4 w-4" />
      </div>
    </div>
  </div>
);

export default EmployeeCard;