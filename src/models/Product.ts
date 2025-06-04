export interface ProductResponse {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
}



export interface CreateProductDTO {
  name: string;
  description: string;
  category: string;
  price: number;
  image: Blob | File;
}

