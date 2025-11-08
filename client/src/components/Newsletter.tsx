import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { useNewsletterSubscribe } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

export default function Newsletter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { toast } = useToast();
  const subscribe = useNewsletterSubscribe();

  const form = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleSubmit = async (data: NewsletterFormData) => {
    try {
      await subscribe.mutateAsync(data);
      toast({
        title: "Success!",
        description: "You've been subscribed to the Glow Club.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-amber-400/5 relative overflow-hidden"
      data-testid="section-newsletter"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, var(--primary) 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <motion.div
        className="absolute top-1/4 right-1/4 animate-float-slow"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.3 } : {}}
        transition={{ duration: 1 }}
      >
        <svg width="40" height="40" viewBox="0 0 100 100" className="text-primary">
          <circle cx="50" cy="30" r="8" fill="currentColor" opacity="0.6" />
          <path d="M50 40 L55 55 L50 50 L45 55 Z" fill="currentColor" opacity="0.4" />
          <path d="M50 55 L52 70 L50 65 L48 70 Z" fill="currentColor" opacity="0.3" />
        </svg>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-primary/20 to-amber-400/20 mb-6"
          >
            <Mail className="w-8 h-8 md:w-10 md:h-10 text-primary" />
          </motion.div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4" data-testid="text-newsletter-title">
            Join the Glow Club
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl mx-auto" data-testid="text-newsletter-subtitle">
            Subscribe for skincare tips, exclusive offers, and be the first to know about new products
          </p>

          <Form {...form}>
            <motion.form
              onSubmit={form.handleSubmit(handleSubmit)}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="Enter your email"
                        className="h-12 md:h-14 px-6 text-base border-2 border-primary/30 focus:border-primary transition-colors"
                        data-testid="input-newsletter-email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                size="lg"
                disabled={subscribe.isPending}
                className="bg-gradient-to-r from-primary to-amber-400 hover:from-amber-400 hover:to-primary text-primary-foreground px-8 h-12 md:h-14 text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50"
                data-testid="button-newsletter-submit"
              >
                {subscribe.isPending ? "Subscribing..." : "Subscribe"}
              </Button>
            </motion.form>
          </Form>

          <p className="text-xs text-muted-foreground mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
