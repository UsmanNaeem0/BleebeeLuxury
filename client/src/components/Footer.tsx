import { Link } from "wouter";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { SiPinterest } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/40 border-t-4 border-primary/30" data-testid="footer">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-amber-400 flex items-center justify-center">
                <span className="font-serif text-lg font-bold text-primary-foreground">F</span>
              </div>
              <span className="font-serif text-xl font-bold bg-gradient-to-r from-primary to-amber-600 bg-clip-text text-transparent">
                Feezish
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-footer-about">
              Premium Milk & Honey skincare products crafted with nature's finest ingredients to nourish and enhance your natural glow.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-4" data-testid="text-footer-quick-links-title">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Shop", "About", "Contact", "FAQs"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`link-footer-${item.toLowerCase()}`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-4" data-testid="text-footer-customer-care-title">
              Customer Care
            </h3>
            <ul className="space-y-2">
              {["Shipping Info", "Returns", "Track Order", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`link-footer-${item.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-4" data-testid="text-footer-follow-us-title">
              Follow Us
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Stay connected for updates and beauty tips
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 hover-elevate active-elevate-2"
                aria-label="Instagram"
                data-testid="link-footer-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 hover-elevate active-elevate-2"
                aria-label="Facebook"
                data-testid="link-footer-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 hover-elevate active-elevate-2"
                aria-label="Pinterest"
                data-testid="link-footer-pinterest"
              >
                <SiPinterest className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 hover-elevate active-elevate-2"
                aria-label="Twitter"
                data-testid="link-footer-twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground" data-testid="text-footer-copyright">
            © {currentYear} Feezish — Crafted with Love, Milk & Honey. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
