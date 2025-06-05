import api from './api';
import { LoginRequest, LoginResponse } from '../models/Auth';

export const login = async (payload: LoginRequest): Promise<LoginResponse> => {
  const params = new URLSearchParams();
  params.append("username", payload.email);
  params.append("password", payload.password);

  const response = await api.post('/auth/login', params, {
    headers: { "Content-Type": "application/x-www-form-urlencoded" }
  });
  return response.data;
};