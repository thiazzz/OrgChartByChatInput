const API_BASE_URL = 'http://your-coldfusion-server/api';

export const addDepartment = async (
  departmentName: string,
  parentDepartment?: string
): Promise<Response> => {
  try {
    const response = await fetch(`${API_BASE_URL}/addDepartment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: departmentName,
        parent: parentDepartment,
      }),
    });
    return response.json();
  } catch (error) {
    console.error('Error adding department:', error);
    throw error;
  }
};