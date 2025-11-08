import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import faceCareImage from "@assets/generated_images/Face_care_category_image_99c2506d.png";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="about"
      ref={ref}
      className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-secondary/30"
      data-testid="section-about"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src={faceCareImage}
                alt="Honey being poured into milk"
                className="w-full h-auto object-cover"
                data-testid="img-about"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary to-amber-400 rounded-full opacity-20 blur-2xl"
            ></motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="inline-block">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <div className="h-1 w-12 bg-gradient-to-r from-primary to-amber-400 mt-2"></div>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight" data-testid="text-about-title">
              Nourish Your Skin with Nature's Purest Blend
            </h2>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed" data-testid="text-about-description">
              Feezish skincare products are crafted with organic milk and golden honey to hydrate, heal, and enhance your natural glow. We believe in the power of nature's finest ingredients to transform your skincare routine into a luxurious ritual.
            </p>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Each product is carefully formulated to combine ancient beauty secrets with modern science, delivering exceptional results that you can see and feel. Experience the difference of pure, natural ingredients working in harmony with your skin.
            </p>

            <div className="pt-4">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm font-medium text-foreground">100% Natural</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm font-medium text-foreground">Cruelty-Free</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm font-medium text-foreground">Dermatologist-Tested</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
