import { CreateProductDTO, ProductResponse } from "../models/Product";
import api from "./api";

export const listProducts = async (category?: string): Promise<ProductResponse[]> => {
  const response = await api.get('/products/', {
    params: category ? { category } : {},
  } );
  return  response.data;
};

export const createProduct = async (data: CreateProductDTO): Promise<ProductResponse> => {
  const formData = new FormData();
  formData.append("category", data.category);
  formData.append("name", data.name);
  formData.append("price", String(data.price));
  formData.append("description", data.description);
  formData.append("image", data.image);

  const response = await api.post<ProductResponse>("/products/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};