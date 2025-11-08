import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Loader2 } from "lucide-react";
import { useFeaturedProducts } from "@/lib/api";
import faceCreamImg from "@assets/generated_images/Luxury_face_cream_jar_8c6c95d9.png";
import serumImg from "@assets/generated_images/Honey_serum_bottle_50b3d3cc.png";
import lotionImg from "@assets/generated_images/Body_lotion_bottle_ad422846.png";
import maskImg from "@assets/generated_images/Honey_mask_jar_16eeb523.png";

const productImages: Record<string, string> = {
  "Milk & Honey Face Cream": faceCreamImg,
  "Golden Honey Serum": serumImg,
  "Nourishing Body Lotion": lotionImg,
  "Honey Glow Mask": maskImg,
};

export default function FeaturedProducts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { data: products, isLoading, error } = useFeaturedProducts();

  return (
    <section
      id="products"
      ref={ref}
      className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-secondary/30 via-background to-secondary/20 relative overflow-hidden"
      data-testid="section-products"
    >
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-amber-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Premium Collection</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-4" data-testid="text-products-title">
            Our Bestsellers
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Discover our most-loved products, crafted with the finest natural ingredients
          </p>
        </motion.div>

        {isLoading && (
          <div className="flex justify-center items-center py-20" data-testid="loading-products">
            <Loader2 className="w-12 h-12 text-primary animate-spin" />
          </div>
        )}

        {error && (
          <div className="text-center py-20" data-testid="error-products">
            <p className="text-muted-foreground">Failed to load products. Please try again later.</p>
          </div>
        )}

        {products && products.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group hover-elevate active-elevate-2 transition-all duration-300 overflow-hidden h-full flex flex-col" data-testid={`card-product-${product.id}`}>
                  <CardHeader className="p-0 relative overflow-hidden">
                    <div className="relative aspect-square overflow-hidden bg-secondary/30">
                      <img
                        src={productImages[product.name] || faceCreamImg}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        data-testid={`img-product-${product.id}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    {product.originalPrice && (
                      <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground" data-testid={`badge-sale-${product.id}`}>
                        Sale
                      </Badge>
                    )}
                  </CardHeader>
                  <CardContent className="p-4 md:p-6 flex-1">
                    <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground mb-2 line-clamp-2" data-testid={`text-product-name-${product.id}`}>
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2" data-testid={`text-product-description-${product.id}`}>
                      {product.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-lg text-primary" data-testid={`text-product-price-${product.id}`}>
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through" data-testid={`text-product-original-price-${product.id}`}>
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 md:p-6 pt-0">
                    <Button
                      className="w-full bg-gradient-to-r from-primary to-amber-400 hover:from-amber-400 hover:to-primary text-primary-foreground transition-all duration-300"
                      data-testid={`button-add-to-cart-${product.id}`}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {products && products.length === 0 && (
          <div className="text-center py-20" data-testid="empty-products">
            <p className="text-muted-foreground">No products available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
}
