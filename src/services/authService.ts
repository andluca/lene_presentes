import api from './api';
import { LoginRequest, LoginResponse } from '../models/Auth';

export const login = async (payload: LoginRequest): Promise<LoginResponse> => {
  const response = await api.post('/auth/login', payload);
  return response.data;
};
