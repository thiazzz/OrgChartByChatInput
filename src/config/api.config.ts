export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL,
  ENDPOINTS: {
    ADD_DEPARTMENT: '/addDepartment',
  },
  HEADERS: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  TIMEOUT: 5000, // 5 seconds
};

// Development mock API flag
export const USE_MOCK_API = import.meta.env.DEV && !API_CONFIG.BASE_URL;