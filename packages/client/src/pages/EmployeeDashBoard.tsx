import { useState } from 'react';
import { useFetchEmployees } from '../hooks/useFetchEmployess.ts';
import Switch from '../components/Switch';
import Button from '../components/Button';
import EmployeeCard from '../components/EmployeeCard';
import EmployeeDetails from '../components/EmployeeDetails';
import MenuItems from '../components/MenuItems';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Employee } from '../models/Employee.ts';


const EmployeeDashboard = () => {
  const employees = useFetchEmployees();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHorizontalMenu, setIsHorizontalMenu] = useState(true);
  const [viewMode, setViewMode] = useState<'grid' | 'tile'>('grid');
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleMenuStyle = () => setIsHorizontalMenu(!isHorizontalMenu);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">Employee Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Switch
              checked={isHorizontalMenu}
              onCheckedChange={toggleMenuStyle}
            />
            <span className="text-sm text-gray-600">
              {isHorizontalMenu ? 'Horizontal' : 'Hamburger'} Menu
            </span>
            {isHorizontalMenu ? (
              <nav className="hidden md:flex space-x-4">
                <MenuItems />
              </nav>
            ) : (
              <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-600">
                <Menu className="h-6 w-6" />
              </button>
            )}
          </div>
        </div>
      </header>

      <AnimatePresence>
        {!isHorizontalMenu && isMenuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween' }}
            className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-50"
          >
            <div className="p-4">
              <button onClick={toggleMenu} className="absolute top-4 right-4 text-gray-500 hover:text-gray-600">
                <X className="h-6 w-6" />
              </button>
              <nav className="mt-8 space-y-2">
                <MenuItems />
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Employee List</h2>
            <div className="flex items-center space-x-4">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                onClick={() => setViewMode('grid')}
              >
                Grid
              </Button>
              <Button
                variant={viewMode === 'tile' ? 'default' : 'outline'}
                onClick={() => setViewMode('tile')}
              >
                Tile
              </Button>
            </div>
          </div>

          {viewMode === 'grid' ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                  {['Name', 'Email', 'Phone', 'Location', 'DOB', 'Actions'].map((header) => (
                    <th
                      key={header}
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {employees.map((employee) => (
                  <tr key={employee.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src={employee.picture} alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{employee.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{employee.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{employee.phone}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {employee.location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {employee.dob}
                    </td>
                    {/*<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">*/}
                    {/*  {employee.registered}*/}
                    {/*</td>*/}
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Button variant="ghost" onClick={() => setSelectedEmployee(employee)}>View</Button>
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {employees.map((employee) => (
                <EmployeeCard key={employee.id} employee={employee} onClick={() => setSelectedEmployee(employee)} />
              ))}
            </div>
          )}
        </div>
      </main>

      <AnimatePresence>
        {selectedEmployee && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 200, damping: 30 }}
            className="fixed inset-0 flex items-center justify-center z-50"
          >
            <EmployeeDetails employee={selectedEmployee} onClose={() => setSelectedEmployee(null)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EmployeeDashboard;