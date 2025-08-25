# TrendHive - Modern E-commerce Platform

A full-stack e-commerce application built with Next.js, TypeScript, and Tailwind CSS, featuring a modern design and seamless shopping experience.

![TrendHive Preview](https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop)

## 🌟 Features

- **Modern UI/UX**: Clean, responsive design with Tailwind CSS
- **Product Catalog**: Browse products by categories (Electronics, Fashion, Home, Books, Sports, Toys)
- **Shopping Cart**: Add, remove, and manage items with persistent storage
- **Product Search**: Search functionality across all products
- **Responsive Design**: Mobile-first approach, works on all devices
- **Performance Optimized**: Built with Next.js for optimal loading speeds
- **Type Safety**: Full TypeScript implementation
- **Accessible**: Built with Radix UI components for accessibility

## 🛠️ Tech Stack

- **Frontend**: Next.js 13.5.1 with App Router
- **Language**: TypeScript 5.2.2
- **Styling**: Tailwind CSS 3.3.3
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **State Management**: React Context API
- **Form Handling**: React Hook Form with Zod validation
- **Image Optimization**: Next.js Image component with Unsplash
- **Deployment**: Netlify

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd trendhive-ecommerce
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
trendhive-ecommerce/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── category/          # Category pages
│   ├── products/          # Product pages
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── ui/               # UI primitives (Radix UI)
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Site footer
│   └── ProductCard.tsx   # Product display component
├── contexts/             # React Context providers
│   └── CartContext.tsx   # Shopping cart state
├── lib/                  # Utility functions and types
│   ├── types.ts         # TypeScript type definitions
│   └── utils.ts         # Helper functions
└── public/              # Static assets
```

## 🛒 Key Features

### Product Categories
- **Electronics**: Headphones, smartphones, laptops
- **Fashion**: Clothing, shoes, accessories
- **Home & Garden**: Furniture, decor, appliances
- **Books**: Fiction, non-fiction, educational
- **Sports & Outdoors**: Equipment, apparel, gear
- **Toys & Games**: Educational toys, games, puzzles

### Shopping Experience
- Product browsing with high-quality images
- Detailed product information and ratings
- Shopping cart with quantity management
- Responsive design for all devices
- Fast loading with optimized images

## 🚀 Deployment

### Netlify Deployment

This project is configured for easy deployment on Netlify:

1. Connect your GitHub repository to Netlify
2. Build settings are automatically configured via `netlify.toml`
3. Deploy with these settings:
   - Build command: `npm run build`
   - Publish directory: `out`

### Manual Deployment

```bash
# Build for production
npm run build

# The built files will be in the 'out' directory
# Upload the 'out' directory to your hosting provider
```

## 🎨 Design System

- **Colors**: Orange gradient branding with blue accents
- **Typography**: Clean, modern font stack
- **Components**: Consistent design language across all pages
- **Responsive**: Mobile-first, tablet, and desktop optimized
- **Accessibility**: ARIA compliant with keyboard navigation

## 🔧 Configuration

### Environment Variables

Currently using mock data. For production, you may want to add:

```env
# Add your environment variables here
NEXT_PUBLIC_API_URL=your_api_url
```

### Customization

- **Branding**: Update logos and colors in components
- **Products**: Modify mock data in page components
- **Styling**: Customize Tailwind configuration in `tailwind.config.ts`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👥 Contact

- Project: TrendHive E-commerce Platform
- Built with ❤️ using Next.js and TypeScript

---

**Live Demo**: [Add your Netlify URL here after deployment]