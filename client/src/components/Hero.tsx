import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Honey_milk_blend_hero_background_ae27868b.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" data-testid="section-hero">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background"></div>
      </div>

      <div className="absolute top-1/4 left-1/4 w-12 h-12 animate-float">
        <svg viewBox="0 0 100 100" className="text-primary/30">
          <circle cx="50" cy="50" r="8" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute top-1/3 right-1/3 w-8 h-8 animate-float-slow" style={{ animationDelay: "1s" }}>
        <svg viewBox="0 0 100 100" className="text-amber-400/20">
          <circle cx="50" cy="50" r="6" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute bottom-1/3 left-1/2 w-10 h-10 animate-float" style={{ animationDelay: "2s" }}>
        <svg viewBox="0 0 100 100" className="text-primary/25">
          <circle cx="50" cy="50" r="7" fill="currentColor" />
        </svg>
      </div>

      <motion.div
        className="absolute top-1/4 right-1/4 animate-float-slow"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <svg width="60" height="60" viewBox="0 0 100 100" className="text-amber-500">
          <path
            d="M50 20 L60 40 L50 35 L40 40 Z M50 35 L55 50 L50 45 L45 50 Z M50 45 L52 60 L50 55 L48 60 Z"
            fill="currentColor"
            opacity="0.3"
          />
          <circle cx="50" cy="30" r="8" fill="currentColor" opacity="0.6" />
        </svg>
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 text-center pt-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4">
              Premium Milk & Honey Skincare
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight"
            data-testid="text-hero-title"
          >
            Welcome to <span className="bg-gradient-to-r from-primary via-amber-500 to-amber-600 bg-clip-text text-transparent">Feezish</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light"
            data-testid="text-hero-subtitle"
          >
            Where nature meets skincare — indulge in the blend of Milk & Honey
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-amber-400 hover:from-amber-400 hover:to-primary text-primary-foreground px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              data-testid="button-explore-collection"
            >
              Explore Collection
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg backdrop-blur-sm bg-background/50 w-full sm:w-auto transition-all duration-300"
              data-testid="button-shop-now-hero"
            >
              Shop Now
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path
            d="M0,0 Q300,50 600,30 T1200,0 L1200,100 L0,100 Z"
            fill="hsl(var(--background))"
            opacity="0.8"
          />
          <path
            d="M0,20 Q300,70 600,50 T1200,20 L1200,100 L0,100 Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
}
