import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient, apiRequest } from "./queryClient";
import type { Product, Category, Testimonial, Newsletter } from "@shared/schema";

export function useProducts() {
  return useQuery<Product[]>({
    queryKey: ["/api/products"],
  });
}

export function useFeaturedProducts() {
  return useQuery<Product[]>({
    queryKey: ["/api/products/featured"],
  });
}

export function useCategories() {
  return useQuery<Category[]>({
    queryKey: ["/api/categories"],
  });
}

export function useTestimonials() {
  return useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });
}

export function useNewsletterSubscribe() {
  return useMutation({
    mutationFn: async (data: { email: string }) => {
      return await apiRequest<Newsletter>("POST", "/api/newsletter/subscribe", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/newsletter"] });
    },
  });
}
