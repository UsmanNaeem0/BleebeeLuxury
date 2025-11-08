import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Droplets, ShieldCheck, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    id: 1,
    icon: Leaf,
    title: "100% Natural Ingredients",
    description: "Only the finest organic milk and pure golden honey, sourced sustainably",
  },
  {
    id: 2,
    icon: Droplets,
    title: "Enriched with Milk & Honey",
    description: "Ancient beauty secrets combined with modern skincare science",
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: "Dermatologist-Tested",
    description: "Clinically proven formulas that are safe and effective for all skin types",
  },
  {
    id: 4,
    icon: Heart,
    title: "Cruelty-Free & Eco-Friendly",
    description: "Never tested on animals, always kind to the planet",
  },
];

export default function WhyChoose() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background via-secondary/30 to-background relative overflow-hidden"
      data-testid="section-why-choose"
    >
      <div className="absolute top-10 left-1/4 w-3 h-3 rounded-full bg-primary/30 animate-float"></div>
      <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-amber-400/40 animate-float-slow"></div>
      <div className="absolute bottom-1/4 left-1/3 w-4 h-4 rounded-full bg-primary/20 animate-float" style={{ animationDelay: "1s" }}></div>
      <div className="absolute bottom-1/2 right-1/3 w-3 h-3 rounded-full bg-amber-400/30 animate-float-slow" style={{ animationDelay: "2s" }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Feezish</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-4" data-testid="text-why-choose-title">
            Why Choose Feezish?
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Experience the difference of pure, natural skincare that truly cares for you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="text-center h-full hover-elevate active-elevate-2 transition-all duration-300 border-primary/20" data-testid={`card-feature-${feature.id}`}>
                <CardContent className="p-6 md:p-8 space-y-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                    className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-primary/20 to-amber-400/20 mb-4"
                  >
                    <feature.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" data-testid={`icon-feature-${feature.id}`} />
                  </motion.div>
                  <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground" data-testid={`text-feature-title-${feature.id}`}>
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed" data-testid={`text-feature-description-${feature.id}`}>
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
