import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Loader2 } from "lucide-react";
import { useTestimonials } from "@/lib/api";
import testimonial1 from "@assets/generated_images/Customer_testimonial_portrait_1_7a3bd214.png";
import testimonial2 from "@assets/generated_images/Customer_testimonial_portrait_2_988f842c.png";
import testimonial3 from "@assets/generated_images/Customer_testimonial_portrait_3_d38f186b.png";

const testimonialImages: Record<string, string> = {
  "Sarah Johnson": testimonial1,
  "Emily Chen": testimonial2,
  "Jessica Williams": testimonial3,
};

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const { data: testimonials, isLoading, error } = useTestimonials();

  useEffect(() => {
    if (!testimonials || testimonials.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials]);

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-secondary/40 via-primary/10 to-secondary/40 relative overflow-hidden"
      data-testid="section-testimonials"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4" data-testid="text-testimonials-title">
            Loved by Skin, Trusted by You
          </h2>
        </motion.div>

        {isLoading && (
          <div className="flex justify-center items-center py-20" data-testid="loading-testimonials">
            <Loader2 className="w-12 h-12 text-primary animate-spin" />
          </div>
        )}

        {error && (
          <div className="text-center py-20" data-testid="error-testimonials">
            <p className="text-muted-foreground">Failed to load testimonials. Please try again later.</p>
          </div>
        )}

        {testimonials && testimonials.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <div className="relative min-h-[400px] md:min-h-[300px]">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: currentIndex === index ? 1 : 0,
                    scale: currentIndex === index ? 1 : 0.9,
                    zIndex: currentIndex === index ? 10 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Card className="bg-card/80 backdrop-blur-sm border-primary/20" data-testid={`card-testimonial-${testimonial.id}`}>
                    <CardContent className="p-8 md:p-12">
                      <div className="flex flex-col items-center text-center space-y-6">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={isInView ? { scale: 1 } : {}}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          className="relative"
                        >
                          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden ring-4 ring-primary/20">
                            <img
                              src={testimonialImages[testimonial.name] || testimonial1}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                              data-testid={`img-testimonial-${testimonial.id}`}
                            />
                          </div>
                          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-primary to-amber-400 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                        </motion.div>

                        <div className="flex space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-primary text-primary" data-testid={`star-${testimonial.id}-${i}`} />
                          ))}
                        </div>

                        <p className="text-base md:text-lg text-foreground leading-relaxed italic max-w-2xl" data-testid={`text-testimonial-content-${testimonial.id}`}>
                          "{testimonial.content}"
                        </p>

                        <div>
                          <h4 className="font-serif text-lg md:text-xl font-semibold text-foreground" data-testid={`text-testimonial-name-${testimonial.id}`}>
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-muted-foreground" data-testid={`text-testimonial-role-${testimonial.id}`}>
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index ? "bg-primary w-8" : "bg-primary/30"
                  }`}
                  data-testid={`button-testimonial-dot-${index}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        {testimonials && testimonials.length === 0 && (
          <div className="text-center py-20" data-testid="empty-testimonials">
            <p className="text-muted-foreground">No testimonials available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
}
