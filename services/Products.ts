import { Product } from "@/types/Product";

export const getProducts = async (): Promise<Product[]> => {
    const response = await fetch(process.env.API_BASE_URL + "/api/products");
    return response.json();
}

export const getProduct = async (productName: string): Promise<Product> => {
    const response = await fetch(process.env.API_BASE_URL + "/api/products/" + productName);
    return response.json();
}