import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080', 
  timeout: 10000,

  withCredentials: true, 
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const isLoginRequest = error.config && error.config.url === '/auth/login';

    if (error.response && error.response.status === 401 && !isLoginRequest) {
      console.error('Session expired or unauthorized. Redirecting to login...');
      
      localStorage.removeItem('paas_user');
      window.location.href = '/login';
    }
    
    return Promise.reject(error);
  }
);

export default axiosInstance;