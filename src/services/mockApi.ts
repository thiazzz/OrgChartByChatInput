import { ApiResponse, DepartmentData } from '../types/api.types';
import { delay } from '../utils/helpers';

// Simulated database
let mockDepartments: DepartmentData[] = [];

export const mockAddDepartment = async (
  name: string,
  parent?: string
): Promise<ApiResponse> => {
  await delay(500); // Simulate network delay

  const newDepartment: DepartmentData = {
    id: Date.now().toString(),
    name,
    parentId: parent ? mockDepartments.find(d => d.name === parent)?.id : undefined
  };

  mockDepartments.push(newDepartment);

  return {
    success: true,
    message: 'Department added successfully',
    data: newDepartment
  };
};