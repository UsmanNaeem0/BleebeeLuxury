import {
  type Product,
  type InsertProduct,
  type Category,
  type InsertCategory,
  type Testimonial,
  type InsertTestimonial,
  type Newsletter,
  type InsertNewsletter,
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getProducts(): Promise<Product[]>;
  getProduct(id: string): Promise<Product | undefined>;
  getFeaturedProducts(): Promise<Product[]>;
  getProductsByCategory(category: string): Promise<Product[]>;
  createProduct(product: InsertProduct): Promise<Product>;

  getCategories(): Promise<Category[]>;
  getCategory(id: string): Promise<Category | undefined>;
  getCategoryBySlug(slug: string): Promise<Category | undefined>;
  createCategory(category: InsertCategory): Promise<Category>;

  getTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;

  subscribeNewsletter(newsletter: InsertNewsletter): Promise<Newsletter>;
  isEmailSubscribed(email: string): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private products: Map<string, Product>;
  private categories: Map<string, Category>;
  private testimonials: Map<string, Testimonial>;
  private newsletters: Map<string, Newsletter>;

  constructor() {
    this.products = new Map();
    this.categories = new Map();
    this.testimonials = new Map();
    this.newsletters = new Map();
    this.seedData();
  }

  private seedData() {
    const categories: InsertCategory[] = [
      {
        name: "Face Care",
        slug: "face-care",
        description: "Nourishing creams and serums for radiant skin",
        image: "/api/placeholder-category-1",
      },
      {
        name: "Body Creams",
        slug: "body-creams",
        description: "Luxurious hydration for silky smooth skin",
        image: "/api/placeholder-category-2",
      },
      {
        name: "Serums",
        slug: "serums",
        description: "Intensive treatment for targeted skin concerns",
        image: "/api/placeholder-category-3",
      },
      {
        name: "Honey Masks",
        slug: "honey-masks",
        description: "Deep cleansing and rejuvenating treatments",
        image: "/api/placeholder-category-4",
      },
    ];

    categories.forEach((cat) => {
      const id = randomUUID();
      this.categories.set(id, { ...cat, id });
    });

    const products: InsertProduct[] = [
      {
        name: "Milk & Honey Face Cream",
        description: "Luxurious daily moisturizer with organic ingredients",
        price: "48.00",
        originalPrice: null,
        image: "/api/placeholder-product-1",
        category: "face-care",
        featured: 1,
      },
      {
        name: "Golden Honey Serum",
        description: "Intensive repair serum for radiant skin",
        price: "62.00",
        originalPrice: "89.00",
        image: "/api/placeholder-product-2",
        category: "serums",
        featured: 1,
      },
      {
        name: "Nourishing Body Lotion",
        description: "Silky smooth hydration for all-day softness",
        price: "38.00",
        originalPrice: null,
        image: "/api/placeholder-product-3",
        category: "body-creams",
        featured: 1,
      },
      {
        name: "Honey Glow Mask",
        description: "Deep cleansing and rejuvenating face mask",
        price: "45.00",
        originalPrice: "65.00",
        image: "/api/placeholder-product-4",
        category: "honey-masks",
        featured: 1,
      },
      {
        name: "Radiance Facial Toner",
        description: "Balancing toner with honey extracts",
        price: "32.00",
        originalPrice: null,
        image: "/api/placeholder-product-5",
        category: "face-care",
        featured: 0,
      },
      {
        name: "Hydrating Hand Cream",
        description: "Intensive moisture for soft, smooth hands",
        price: "24.00",
        originalPrice: null,
        image: "/api/placeholder-product-6",
        category: "body-creams",
        featured: 0,
      },
    ];

    products.forEach((prod) => {
      const id = randomUUID();
      this.products.set(id, { ...prod, id });
    });

    const testimonials: InsertTestimonial[] = [
      {
        name: "Sarah Johnson",
        role: "Beauty Enthusiast",
        content:
          "Feezish has completely transformed my skincare routine. The Milk & Honey Face Cream is absolutely divine! My skin has never felt so soft and radiant. I'm obsessed!",
        image: "/api/placeholder-testimonial-1",
        rating: 5,
      },
      {
        name: "Emily Chen",
        role: "Skincare Blogger",
        content:
          "As someone who reviews skincare products professionally, I can confidently say Feezish is exceptional. The quality of ingredients and the luxurious feel of their products are unmatched.",
        image: "/api/placeholder-testimonial-2",
        rating: 5,
      },
      {
        name: "Jessica Williams",
        role: "Wellness Coach",
        content:
          "I love that Feezish uses 100% natural ingredients. The Golden Honey Serum has become my holy grail product. My clients always ask about my glowing skin!",
        image: "/api/placeholder-testimonial-3",
        rating: 5,
      },
    ];

    testimonials.forEach((test) => {
      const id = randomUUID();
      this.testimonials.set(id, { ...test, id });
    });
  }

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: string): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async getFeaturedProducts(): Promise<Product[]> {
    return Array.from(this.products.values()).filter((p) => p.featured === 1);
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter((p) => p.category === category);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = randomUUID();
    const product: Product = { ...insertProduct, id };
    this.products.set(id, product);
    return product;
  }

  async getCategories(): Promise<Category[]> {
    return Array.from(this.categories.values());
  }

  async getCategory(id: string): Promise<Category | undefined> {
    return this.categories.get(id);
  }

  async getCategoryBySlug(slug: string): Promise<Category | undefined> {
    return Array.from(this.categories.values()).find((c) => c.slug === slug);
  }

  async createCategory(insertCategory: InsertCategory): Promise<Category> {
    const id = randomUUID();
    const category: Category = { ...insertCategory, id };
    this.categories.set(id, category);
    return category;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = randomUUID();
    const testimonial: Testimonial = { ...insertTestimonial, id };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }

  async subscribeNewsletter(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    const id = randomUUID();
    const newsletter: Newsletter = {
      ...insertNewsletter,
      id,
      subscribedAt: new Date().toISOString(),
    };
    this.newsletters.set(id, newsletter);
    return newsletter;
  }

  async isEmailSubscribed(email: string): Promise<boolean> {
    return Array.from(this.newsletters.values()).some((n) => n.email === email);
  }
}

export const storage = new MemStorage();
