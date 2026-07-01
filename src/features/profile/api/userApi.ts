import axios from '../../../lib/axios';

export interface UpdateProfilePayload {
  fullName: string;
}

export interface UserProfileResponse {
  id: number;
  email: string;
  username: string;
  fullName: string;
  avatarUrl: string;
  githubUsername: string | null;
  role: string;
  status: string;
  createdAt: string;
}

export interface ChangePasswordPayload {
  oldPassword: string;
  newPassword: string;
}

export const userApi = {
  getMe: async (): Promise<UserProfileResponse> => {
    const response = await axios.get('/users/me');
    return response.data;
  },

  changePassword: async (payload: ChangePasswordPayload): Promise<string> => {
    const response = await axios.patch('/users/me/password', payload);
    return response.data;
  },

  updateProfile: async (payload: UpdateProfilePayload): Promise<UserProfileResponse> => {
    const response = await axios.put('/users/me', payload);
    return response.data;
  }
};