import axios from '../../../lib/axios';

export interface LoginPayload {
  username: string;
  password: string;
}

export interface AuthResponse {
  username: string;
  role: string;
}

export const authApi = {
  login: async (credentials: LoginPayload): Promise<AuthResponse> => {
    const response = await axios.post('/auth/login', credentials);
    return response.data;
  },

  logout: async (): Promise<void> => {
    const response = await axios.post('/auth/logout');
    return response.data;
  }
};