import { useState, useEffect } from 'react';
import { Employee } from '../pages/EmployeeDashboard';

export const useFetchEmployees = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=20')
      .then((response) => response.json())
      .then((data) => {
        const formattedEmployees: Employee[] = data.results.map((user: any) => ({
          id: user.login.uuid,
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          phone: user.phone,
          picture: user.picture.large,
          location: `${user.location.city}, ${user.location.country}`,
          dob: new Date(user.dob.date).toLocaleDateString(),
        }));
        setEmployees(formattedEmployees);
      });
  }, []);

  return employees;
};