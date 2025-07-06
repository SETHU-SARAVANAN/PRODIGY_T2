
import { Employee, CreateEmployeeData } from '../types/employee';

// Mock data storage - in a real app, this would be API calls
let employees: Employee[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@company.com',
    phone: '+1-555-0123',
    department: 'Engineering',
    position: 'Senior Developer',
    salary: 95000,
    hireDate: '2022-01-15',
    status: 'active'
  },
  {
    id: '2',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@company.com',
    phone: '+1-555-0124',
    department: 'Marketing',
    position: 'Marketing Manager',
    salary: 75000,
    hireDate: '2021-08-22',
    status: 'active'
  },
  {
    id: '3',
    firstName: 'Mike',
    lastName: 'Johnson',
    email: 'mike.johnson@company.com',
    phone: '+1-555-0125',
    department: 'HR',
    position: 'HR Specialist',
    salary: 65000,
    hireDate: '2023-03-10',
    status: 'inactive'
  }
];

export const employeeService = {
  getAll: (): Promise<Employee[]> => {
    console.log('Fetching all employees');
    return Promise.resolve([...employees]);
  },

  getById: (id: string): Promise<Employee | null> => {
    console.log('Fetching employee by id:', id);
    const employee = employees.find(emp => emp.id === id);
    return Promise.resolve(employee || null);
  },

  create: (data: CreateEmployeeData): Promise<Employee> => {
    console.log('Creating new employee:', data);
    const newEmployee: Employee = {
      ...data,
      id: Math.random().toString(36).substr(2, 9),
      status: 'active'
    };
    employees.push(newEmployee);
    return Promise.resolve(newEmployee);
  },

  update: (id: string, data: Partial<Employee>): Promise<Employee | null> => {
    console.log('Updating employee:', id, data);
    const index = employees.findIndex(emp => emp.id === id);
    if (index === -1) return Promise.resolve(null);
    
    employees[index] = { ...employees[index], ...data };
    return Promise.resolve(employees[index]);
  },

  delete: (id: string): Promise<boolean> => {
    console.log('Deleting employee:', id);
    const index = employees.findIndex(emp => emp.id === id);
    if (index === -1) return Promise.resolve(false);
    
    employees.splice(index, 1);
    return Promise.resolve(true);
  }
};
