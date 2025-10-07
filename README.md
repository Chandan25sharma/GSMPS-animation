# GSMPS - Next.js with GSAP ScrollTrigger

A stunning 3-page website built with Next.js, React, and GSAP ScrollTrigger featuring smooth scrolling animations and interactive experiences.

##  Features

### Main Page (8 Sections)

- **Hero Section** - Welcome screen with call-to-action
- **About Section** - Company information with grid layout
- **Services Section** - Service offerings with icon cards
- **Portfolio Section** - Project showcase with hover effects
- **Team Section** - Team member profiles
- **Testimonials Section** - Client feedback with star ratings
- **Contact Section** - Contact form with company information
- **Final Section** - Navigation to gallery page

### Gallery Page (4 Sections)

- **Gallery Hero** - Welcome to gallery with navigation
- **Horizontal Scroll Section** - 10+ images with horizontal scrolling animation
- **Gallery Showcase** - Creative work collections
- **Gallery Contact** - Project inquiry and navigation back to home

##  Technology Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **GSAP** - Professional animation library
- **ScrollTrigger** - GSAP plugin for scroll-based animations
- **ScrollSmoother** - GSAP plugin for smooth scrolling experience

##  Key Animation Features

### ScrollTrigger Implementation

- **Pin Content**: Sections stick during scroll for layered effect
- **Smooth Scrolling**: Butter-smooth scrolling experience
- **Fade Animations**: Elements fade in as they enter viewport
- **Horizontal Scrolling**: Gallery images scroll horizontally on vertical scroll

### Animation Functions

- `hasPinContent()` - Pins sections during scroll
- `hasPinContent2()` - Alternative pinning method
- `hasFadeAnim()` - Fade-in animations for elements

##  Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd gsmps

# Install dependencies
npm install

# Run development server
npm run dev
```

### Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Main page with 8 sections
│   ├── gallery/
│   │   └── page.tsx          # Gallery page with horizontal scroll
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── sections/             # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── PortfolioSection.tsx
│   │   ├── TeamSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── FinalSection.tsx
│   │   └── gallery/          # Gallery page sections
│   │       ├── GalleryHeroSection.tsx
│   │       ├── HorizontalScrollSection.tsx
│   │       ├── GalleryShowcaseSection.tsx
│   │       └── GalleryContactSection.tsx
│   └── tools/
│       └── ScrollSmoother.tsx # GSAP ScrollSmoother component
└── lib/
    └── animation/            # Animation utilities
        ├── hasPinContent.ts
        ├── hasPinContent2.ts
        └── hasFadeAnim.ts
```
##  Design Features

- **Gradient Backgrounds** - Each section has unique gradient themes
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Interactive Elements** - Hover effects and transitions
- **Modern Typography** - Clean, readable font hierarchy
- **Visual Hierarchy** - Clear content organization

##  Pages

1. **Home Page** (`/`) - 8 sections with vertical scrolling and pinned animations
2. **Gallery Page** (`/gallery`) - 4 sections with horizontal scrolling gallery

##  ScrollTrigger Configuration

```javascript
ScrollSmoother.create({
  smooth: 1,
  effects: device_width < 1025 ? false : true,
  smoothTouch: false,
  normalizeScroll: true,
  ignoreMobileResize: true,
});
```

##  Responsive Behavior

- **Desktop** (1024px+): Full GSAP animations and smooth scrolling
- **Tablet/Mobile** (<1024px): Optimized performance with reduced animations

##  Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Manual Build

```bash
npm run build
npm start
```

## 🔧 Customization

### Adding New Sections

1. Create component in `src/components/sections/`
2. Import and add to page component
3. Use animation hooks: `useGSAP()`, `hasPinContent()`, `hasFadeAnim()`

### Modifying Animations

- Edit animation parameters in `src/lib/animation/`
- Adjust ScrollTrigger settings for different behaviors
- Customize fade-in timings and effects

## Dependencies

```json
{
  "gsap": "^3.x.x",
  "@gsap/react": "^2.x.x",
  "next": "15.5.4",
  "react": "19.x.x",
  "tailwindcss": "^3.x.x"
}
```

## Learning Resources

- [GSAP Documentation](https://gsap.com/docs/)
- [ScrollTrigger Guide](https://gsap.com/scrolltrigger/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 📄 License

This project is built for demonstration purposes. Feel free to use and modify as needed.

---

**Built with ❤️ using Next.js and GSAP ScrollTrigger**
