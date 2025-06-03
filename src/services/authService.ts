import api from './api';
import { LoginRequest, LoginResponse } from '../models/Auth';

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await api.post('/auth/login', data);
  return response.data;
};
