import { useQuery } from "@tanstack/react-query";
import { baseURL } from "../config";

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await fetch(`${baseURL}/categories/all`);
      return response.json();
    },
  });
};

export const useProductsByCategory = (categoryId) => {
  return useQuery({
    queryKey: ["productsByCategory", categoryId],
    queryFn: async () => {
      const response = await fetch(`${baseURL}/categories/${categoryId}`);
      const raw = await response.json();
      return {
        category: raw.category,
        products: raw.data, 
      };
    },
    enabled: !!categoryId,
  });
};


export const useAllProducts = () => {
  return useQuery({
    queryKey: ["allProducts"],
    queryFn: async () => {
      const response = await fetch(`${baseURL}/products/all`);
      return response.json();
    },
  });
};

export const useSingleProduct = (id) => {
  return useQuery({
    queryKey: ["singleProduct", id],
    queryFn: async () => {
      const response = await fetch(`${baseURL}/products/${id}`);
      return response.json();
    },
    enabled: !!id,
  });
};
