import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Loader2 } from "lucide-react";
import { useCategories } from "@/lib/api";
import faceCareImg from "@assets/generated_images/Face_care_category_image_99c2506d.png";
import bodyCareImg from "@assets/generated_images/Body_creams_category_image_30e52372.png";

const categoryImages: Record<string, string> = {
  "Face Care": faceCareImg,
  "Body Creams": bodyCareImg,
  "Serums": faceCareImg,
  "Honey Masks": bodyCareImg,
};

export default function Categories() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { data: categories, isLoading, error } = useCategories();

  return (
    <section
      id="shop"
      ref={ref}
      className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-secondary/20 to-background"
      data-testid="section-categories"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Browse Collections</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4" data-testid="text-categories-title">
            Shop by Category
          </h2>
        </motion.div>

        {isLoading && (
          <div className="flex justify-center items-center py-20" data-testid="loading-categories">
            <Loader2 className="w-12 h-12 text-primary animate-spin" />
          </div>
        )}

        {error && (
          <div className="text-center py-20" data-testid="error-categories">
            <p className="text-muted-foreground">Failed to load categories. Please try again later.</p>
          </div>
        )}

        {categories && categories.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg cursor-pointer hover-elevate active-elevate-2"
                data-testid={`category-card-${category.id}`}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={categoryImages[category.name] || faceCareImg}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    data-testid={`img-category-${category.id}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      className="transform transition-all duration-300"
                    >
                      <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2" data-testid={`text-category-name-${category.id}`}>
                        {category.name}
                      </h3>
                      <p className="text-white/90 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-testid={`text-category-description-${category.id}`}>
                        {category.description}
                      </p>
                      <span className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm border border-white/40 text-white rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-4" data-testid={`button-shop-category-${category.id}`}>
                        Shop Now
                      </span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {categories && categories.length === 0 && (
          <div className="text-center py-20" data-testid="empty-categories">
            <p className="text-muted-foreground">No categories available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
}
