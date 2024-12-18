import { API_CONFIG, USE_MOCK_API } from '../config/api.config';
import { ApiError, handleApiError } from '../utils/errorHandling';
import { ApiResponse } from '../types/api.types';
import { mockAddDepartment } from './mockApi';
import { isValidResponse } from '../utils/helpers';

export const addDepartment = async (
  departmentName: string,
  parentDepartment?: string
): Promise<ApiResponse> => {
  try {
    // Use mock API in development if no API URL is configured
    if (USE_MOCK_API) {
      return await mockAddDepartment(departmentName, parentDepartment);
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.TIMEOUT);

    const response = await fetch(
      `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.ADD_DEPARTMENT}`,
      {
        method: 'POST',
        headers: API_CONFIG.HEADERS,
        body: JSON.stringify({
          name: departmentName,
          parent: parentDepartment,
        }),
        signal: controller.signal,
      }
    );

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new ApiError(
        `Failed to add department: ${response.statusText}`,
        response.status
      );
    }

    const data = await response.json();
    
    if (!isValidResponse(data)) {
      throw new ApiError('Invalid response format from server');
    }

    return data;
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      return {
        success: false,
        message: 'Request timed out. Please try again.',
      };
    }

    const apiError = handleApiError(error);
    console.error('Error adding department:', apiError.message);
    return {
      success: false,
      message: apiError.message,
    };
  }
};