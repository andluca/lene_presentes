export interface ProductResponse {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export interface CreateProductDTO {
  name: string;
  description: string;
  category: string;
  price: number;
  image: Blob | File;
}

