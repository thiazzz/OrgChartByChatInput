export interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
}

export interface DepartmentData {
  id: string;
  name: string;
  parentId?: string;
}