import { ProductResponse } from "../models/Product";
import api from "./api";

export const listProducts = async (category?: string): Promise<ProductResponse[]> => {
  const response = await api.get('/products/', {
    params: category ? { category } : {},
  } );
  return  response.data;
};