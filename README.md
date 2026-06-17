```markdown
# Star Investment (Zanzibar) Limited - Corporate Website

A modern, professional corporate website for Star Investment (Zanzibar) Limited, a leading integrated logistics, protocol, transportation, and destination management company based in Zanzibar, Tanzania.

## 🏢 About The Project

This website serves as the digital presence for Star Investment (Zanzibar) Limited, showcasing their comprehensive range of services including:

- Executive Logistics and Protocol Services
- Transportation Services (Executive, Corporate, Marine)
- Destination Management
- Development Partner Support
- Investor Facilitation
- Insurance and Risk Management

### Built With

- **Next.js 14** - React framework for production
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library for React

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18.17.0 or later)
- **Bun** (recommended) or **npm** / **yarn** / **pnpm**

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/star-investment-website.git
cd star-investment-website
```

2. Install dependencies:
```bash
bun install
```
or
```bash
npm install
```

3. Run the development server:
```bash
bun dev
```
or
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📦 Project Structure

```
star-investment-website/
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable React components
│   ├── layout/           # Layout components (Header, Footer)
│   ├── ui/               # UI components (Button, Card)
│   └── sections/         # Page sections (Hero, Services)
├── public/               # Static assets
│   ├── images/          # Images and logos
│   └── icons/           # Favicon and icon files
├── styles/              # Global styles
│   └── globals.css      # Tailwind imports
├── tailwind.config.ts   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies
```

## 🎨 Design System

### Color Palette

| Element          | Color          | HEX         | RGB             |
| ---------------- | -------------- | ----------- | --------------- |
| Primary Blue     | Deep Navy Blue | **#0A2F6B** | (10, 47, 107)   |
| Secondary Gold   | Executive Gold | **#C99A2E** | (201, 154, 46)  |
| White Background | Pure White     | **#FFFFFF** | (255, 255, 255) |


### Typography

- **Primary Font**: Inter (via Next.js Google Fonts)
- **Font Weights**: 400, 500, 600, 700, 800

## 🛠️ Development

### Available Scripts

```bash
# Development
bun dev                  # Start development server
bun dev --turbo         # Start with Turbopack

# Build
bun build               # Create production build
bun start              # Start production server

# Code Quality
bun lint               # Run ESLint
bun format             # Format code with Prettier

# Type Checking
bun type-check         # Run TypeScript compiler check
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_CONTACT_EMAIL=info@starinvestment.co.tz
NEXT_PUBLIC_CONTACT_PHONE=+255XXXXXXXXX
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key_here
```

## 📱 Responsive Design

The website is fully responsive and optimized for:

- 📱 Mobile devices (320px+)
- 💻 Tablets (768px+)
- 🖥️ Desktops (1024px+)
- 🖥️ Large screens (1280px+)
- 🖥️ Ultra-wide screens (1536px+)

## 🧪 Testing

```bash
# Run tests (once configured)
bun test

# Run tests in watch mode
bun test --watch
```

## 📄 License

This project is proprietary and confidential. All rights reserved by Star Investment (Zanzibar) Limited.

## 🤝 Contact

**Star Investment (Zanzibar) Limited**

- 📍 P.O. Box 799, Zanzibar, Tanzania
- 📞 [Insert Telephone Number]
- 📱 [Insert Mobile Number]
- ✉️ [Insert Email]
- 🌐 [Insert Website URL]

## 🙏 Acknowledgments

- Next.js for the amazing framework
- Tailwind CSS for the utility-first CSS
- All team members who contributed to this project

---

## 🚦 Browser Support

| Browser | Version |
|---------|---------|
| Chrome  | 90+     |
| Firefox | 88+     |
| Safari  | 14+     |
| Edge    | 90+     |

## 📊 Performance Metrics

- **Lighthouse Score**: 95+ (Performance, Accessibility, SEO)
- **Page Size**: < 200KB (initial load)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 2.5s

---

**Built with ❤️ by Star Investment (Zanzibar) Limited**

*Delivering Professional Solutions, Managing Logistics, Facilitating Partnerships, and Creating Exceptional Experiences Across Zanzibar and Tanzania.*
```

## 📝 Additional Customization Options

You can also add these sections to make the README more comprehensive:

### Quick Start Guide

Add a quick installation section for developers:

```markdown
## ⚡ Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/star-investment-website.git
cd star-investment-website

# Install with Bun (recommended)
bun install

# Start development server
bun dev
```
```

### Deployment Section

Add deployment instructions:

```markdown
## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository on Vercel
3. Configure environment variables
4. Deploy

### Self-Hosted

```bash
# Build for production
bun run build

# Start production server
bun start
```
```

### Feature Checklist

Add a feature checklist:

```markdown
## ✨ Features

- [x] Responsive design
- [x] Dark/Light mode toggle
- [x] Optimized for SEO
- [x] Contact forms
- [x] Service showcase
- [x] Interactive UI components
- [x] Fast loading times
- [x] Accessibility compliant (WCAG 2.1)
```

Feel free to customize this README based on your specific project needs!