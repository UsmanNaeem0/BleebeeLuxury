# Feezish — Luxurious Milk & Honey Skincare Website

## Project Overview
A premium eCommerce website for Feezish, a luxurious milk and honey skincare brand. The site features an elegant, warm aesthetic inspired by the Blebee VinovaTheme with honey gold, cream white, and warm beige color palette.

## Recent Changes
- **Initial Implementation (Current)**: Complete frontend implementation with all sections, animations, and luxury design system
- Design system configured with honey gold (#F6C76B / HSL 42 89% 69%), cream white (#FFF8E7), and warm beige (#FDF3E6)
- Custom animations for floating elements, honey drips, and smooth transitions
- Full responsive design for mobile, tablet, and desktop

## Tech Stack
- **Frontend**: React, TypeScript, Tailwind CSS, Framer Motion, Wouter
- **Backend**: Express.js, TypeScript
- **Storage**: In-memory storage (MemStorage)
- **Fonts**: Playfair Display (serif/headings), Poppins (sans-serif/body)

## Project Architecture

### Frontend Structure
```
client/src/
├── components/
│   ├── Navigation.tsx       # Fixed nav with blur effect and gold animations
│   ├── Hero.tsx            # Animated hero with honey-milk background
│   ├── About.tsx           # Brand story section
│   ├── FeaturedProducts.tsx # Product grid with hover effects
│   ├── Categories.tsx       # Shop by category blocks
│   ├── WhyChoose.tsx       # Feature cards with icons
│   ├── Testimonials.tsx    # Auto-rotating testimonial carousel
│   ├── Newsletter.tsx      # Email signup with bee animation
│   └── Footer.tsx          # Comprehensive footer with links
├── pages/
│   └── Home.tsx            # Main landing page
└── App.tsx                 # Route configuration
```

### Data Models
- **Product**: id, name, description, price, originalPrice, image, category, featured
- **Category**: id, name, slug, description, image
- **Testimonial**: id, name, role, content, image, rating
- **Newsletter**: id, email, subscribedAt

### Design System
**Colors:**
- Primary (Honey Gold): HSL 42 89% 69%
- Background (Cream White): HSL 44 100% 96%
- Secondary (Warm Beige): HSL 46 70% 90%
- Foreground (Soft Brown): HSL 30 35% 24%

**Typography:**
- Headings: Playfair Display (serif, luxury feel)
- Body: Poppins (modern, readable)

**Animations:**
- Floating bees and honey drops
- Scroll-triggered fade-in effects
- Smooth hover transitions on products and categories
- Auto-rotating testimonial carousel
- Honey drip SVG dividers

### Key Features Implemented
1. ✅ Responsive navigation with mobile hamburger menu
2. ✅ Animated hero section with gradient backgrounds
3. ✅ About section with image and brand story
4. ✅ Featured products grid with sale badges
5. ✅ Category blocks with hover overlays
6. ✅ Why Choose section with icon cards
7. ✅ Testimonials carousel with auto-rotation
8. ✅ Newsletter signup form
9. ✅ Comprehensive footer with social links

## User Preferences
- Luxury, elegant design with organic feel
- Honey gold, cream, and beige color palette
- Smooth, subtle animations (not flashy)
- Generous spacing and breathing room
- Mobile-first responsive design

## Development Commands
- `npm run dev` - Start development server (runs both frontend and backend)
- Frontend: http://localhost:5000
- Backend API: http://localhost:5000/api

## Next Steps
- Implement backend API endpoints for products, categories, testimonials
- Connect frontend to backend APIs
- Add shopping cart functionality
- Implement product detail pages
- Add payment integration
