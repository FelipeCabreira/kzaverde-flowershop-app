# KzaVerde - Floral E-Commerce Platform

A modern, fully-typed Next.js application for browsing and reserving premium floral arrangements. Built with React 17, Next.js 12, and TypeScript.

![Status](https://img.shields.io/badge/status-production--ready-success)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue)
![Next.js](https://img.shields.io/badge/Next.js-12-black)
![Node](https://img.shields.io/badge/Node-18%2B-green)

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Build & Deploy](#build--deploy)
- [Guidelines](#guidelines)
- [Architecture](#architecture)

---

## ✨ Features

### User-Facing Features
- **Hero Section** with video background and call-to-action
- **Quick Search** functionality to browse flowers by type and occasion
- **Curated Collections** featuring bestsellers, seasonal picks, weddings, and sympathy arrangements
- **Product Catalog** with WhatsApp reservation integration
- **Floral Inspiration Gallery** showcasing event setups and custom designs
- **Responsive Design** optimized for desktop, tablet, and mobile
- **Smooth Animations** with intersection observers for reveal effects
- **Multi-language Support** via next-intl

### Technical Features
- **TypeScript Support** with full type safety
- **Server-Side Rendering** for optimal SEO
- **Static Generation** where applicable for performance
- **CSS-in-JS** with styled-jsx for component-scoped styling
- **Global State Management** via React Context API
- **Mobile Navigation** with overlay menu and accessibility features
- **Semantic HTML** for better accessibility and SEO
- **Custom Web Scripts** loaded via dangerous-html for interactive elements

---

## Be aware to check vulnerabilities in react
Run 
```bash
npx fix-react2shell-next
```

## 🛠 Tech Stack

### Core
- **React** 17.0.2 - UI framework
- **Next.js** 12.1.10 - React meta-framework
- **TypeScript** 4.9.5 - Static typing

### Internationalization
- **next-intl** 2.10.0 - Multi-language support

### UI & Styling
- **styled-jsx** - CSS-in-JS (built into Next.js)
- **dangerous-html** 0.1.13 - Safe inline script injection
- **Animate.css** 4.1.1 - Animation library

### Development
- **@types/node** 18.11.18
- **@types/react** 17.0.52
- **@types/react-dom** 17.0.18

### Fonts
- Noto Sans
- Playfair Display
- STIX Two Text
- Inter
- Default needs to be check

---

## 📁 Project Structure

```
worthwhile-bewitched-tapir-next/
├── components/                 # Reusable React components
│   ├── navigation.tsx         # Main navigation bar with mobile menu
│   └── footer.tsx             # Footer with contact info and links
│
├── pages/                      # Next.js pages and routing
│   ├── _app.tsx               # App wrapper, layout, providers
│   ├── _document.tsx          # Custom HTML document
│   ├── index.tsx              # Home page
│   ├── 404.tsx                # 404 error page
│   └── style.css              # Global styles
│
├── locales/                    # Internationalization files
│   └── en.json                # English translations
│
├── types/                      # TypeScript type declarations
│   └── dangerous-html.d.ts     # Type definitions for untyped libraries
│
├── global-context.tsx         # React Context for global state
├── next.config.js             # Next.js configuration
├── tsconfig.json              # TypeScript configuration
├── package.json               # Project dependencies and scripts
├── MIGRATION.md               # TypeScript migration documentation
└── README.md (this file)
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** v18.0.0 or higher
- **npm** v8.0.0 or higher

### Installation

1. **Clone the repository** (if applicable)
   ```bash
   git clone <repository-url>
   cd worthwhile-bewitched-tapir-next
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

---

## 💻 Development

### Available Commands

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Export static HTML (Static Site Generation)
npm run export

# Type check without emitting (verify TypeScript only)
npx tsc --noEmit
```

### Project Configuration

#### TypeScript Configuration (`tsconfig.json`)
- **Strict mode enabled** for maximum type safety
- **JSX preservation** for Next.js JSX compilation
- **Module resolution** set to Node.js style
- **ES module interop** enabled for CommonJS compatibility

#### Next.js Configuration (`next.config.js`)
```javascript
{
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
  }
}
```

#### Path Aliases (`tsconfig.json`)
```typescript
{
  "paths": {
    "@/*": ["./*"]
  }
}
```
Access root files from anywhere: `import { GlobalProvider } from '@/global-context'`

---

## 🔨 Build & Deploy

### Development Build
```bash
npm run dev
```
- Unoptimized build
- Hot module replacement enabled
- Detailed error messages
- SourceMaps included

### Production Build
```bash
npm run build && npm start
```
- Fully optimized and minified
- All pages pre-rendered where possible
- Code split by route
- Ready for deployment

### Output Metrics (Production Build)
```
Route (pages)                   Size     First Load JS
├ ○ /                          7.51 kB  102 kB
├   /_app                      0 B      91.2 kB
└ ○ /404                       806 B    95.4 kB
+ First Load JS shared by all  97.5 kB
```

### Deployment Targets
- **Vercel** (recommended, native Next.js support)
- **AWS Amplify**
- **Netlify** (with adapter)
- **Docker containers**
- **Traditional Node.js hosting**

---

## 📖 Guidelines

### Component Development

#### Creating a New Component
```typescript
import React, { FC, PropsWithChildren } from 'react'

interface CardProps {
  title: string
  description?: string
}

export const Card: FC<PropsWithChildren<CardProps>> = ({ 
  title, 
  description, 
  children 
}) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      {children}
    </div>
  )
}
```

#### Using the Global Context
```typescript
import { useGlobalContext } from '@/global-context'

export const LanguageSwitcher: FC = () => {
  const { locales, locale, setLocale } = useGlobalContext()

  return (
    <select value={locale.short} onChange={(e) => {
      const newLocale = locales.find(l => l.short === e.target.value)
      if (newLocale) setLocale(newLocale)
    }}>
      {locales.map(l => (
        <option key={l.short} value={l.short}>{l.name}</option>
      ))}
    </select>
  )
}
```

### Styling Guidelines

- Use **styled-jsx** for component-scoped styles
- Leverage CSS variables for theming (colors defined in `_document.tsx`)
- Mobile-first responsive design
- Follow BEM naming convention: `component-name__element--modifier`

### Accessibility Standards
- Semantic HTML5 elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast ratio 4.5:1 for readability
- alt text for all images

---

## 🏗 Architecture

### State Management
The application uses **React Context API** for global state management:

```typescript
GlobalContext
├── locales: Locale[] (available languages)
├── locale: Locale (current language)
├── setLocales: (locales: Locale[]) => void
└── setLocale: (locale: Locale) => void
```

Consumed via `useGlobalContext()` hook with type safety.

### Internationalization (i18n)
- Powered by **next-intl** library
- Configuration in `next.config.js`
- Translation files in `locales/` directory
- Currently supports: English

### Data Flow

```
┌─────────────────────────────────────┐
│         Next.js Router              │
└────────────┬────────────────────────┘
             │
┌────────────▼────────────────────────┐
│      _app.tsx (App Wrapper)         │
│  - GlobalProvider                   │
│  - NextIntlProvider                 │
│  - Global styles imported           │
└────────────┬────────────────────────┘
             │
┌────────────▼────────────────────────┐
│    Page Components (index, 404)     │
│  - Navigation component             │
│  - Page-specific content            │
│  - Footer component                 │
└─────────────────────────────────────┘
```

### Rendering Strategy
- **Automatic Static Optimization** for pages without dynamic content
- **ISR (Incremental Static Regeneration)** available for future dynamic pages
- **SSR** for pages requiring real-time data
- **Client-side DOM manipulation** for interactivity (search filters, mobile menu)

---

## 🔒 Type Safety

All files are TypeScript with:
- ✅ `strict: true` enabled
- ✅ No implicit `any` types
- ✅ Proper interface definitions
- ✅ Third-party library type declarations

**Example TypeScript benefits:**
```typescript
// This will error at compile time:
const { nonExistentProp } = useGlobalContext()

// But this is safe:
const { locale, setLocale } = useGlobalContext()
```

---

## 📱 Responsive Design Breakpoints

- **Mobile:** 320px - 767px
- **Tablet:** 768px - 1023px
- **Desktop:** 1024px+

All components tested and optimized for these breakpoints.

---

## 🚦 Performance Optimizations

1. **Next.js Built-in:**
   - Code splitting by route
   - Automatic CSS minification
   - Image optimization ready
   - Font loading optimization

2. **Application Level:**
   - Lazy-loaded animations via Intersection Observer
   - Event delegation for menu interactions
   - CSS-in-JS for zero runtime overhead
   - Static generation for unchanging pages

3. **Network:**
   - Gzip compression
   - CDN-ready (Vercel, etc.)
   - Minimal third-party scripts
   - Local font serving via Google Fonts

---

## 🤝 Contributing

### Code Style
- Follow TypeScript strict mode conventions
- Use camelCase for variables/functions
- Use PascalCase for components/interfaces
- Use kebab-case for CSS classes
- Add comments for complex logic

### Testing
- Manual testing in development
- Type check before commits
- Test on multiple screen sizes
- Verify WhatsApp links work correctly

### Git Workflow
1. Create a feature branch
2. Make changes with meaningful commits
3. Verify build: `npm run build`
4. Create pull request with clear description

---

## 📝 License

MIT License - See LICENSE file for details

---

## 👥 Support & Contact

- **WhatsApp:** Integration ready for customer orders
- **Email:** hello@verdantiaflowers.com
- **Address:** 123 Floral Avenue, Botanical District, NY 10001

---

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev)
- [next-intl Guide](https://next-intl-docs.vercel.app/)

---

## 🎯 Project Status

| Component | Status | Last Updated |
|-----------|--------|--------------|
| TypeScript Migration | ✅ Complete | Feb 4, 2026 |
| Development Server | ✅ Working | Feb 4, 2026 |
| Production Build | ✅ Passing | Feb 4, 2026 |
| Type Checking | ✅ Zero Errors | Feb 4, 2026 |
| Deployment Ready | ✅ Yes | Feb 4, 2026 |

---

**Project Generated by:** TeleportHQ  
**Last Updated:** February 4, 2026  
**Framework:** Next.js 12.1.10 + TypeScript 4.9.5
