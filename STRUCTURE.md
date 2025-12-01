# Project Structure

```
kismat-jewellery/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── gemini/
│   │   │       └── route.ts          # API route for Gemini calls
│   │   ├── globals.css               # Global styles and Tailwind imports
│   │   ├── layout.tsx                # Root layout with fonts
│   │   └── page.tsx                  # Main page component
│   ├── components/
│   │   ├── features/                 # Business logic components
│   │   │   ├── ai-concierge.tsx      # AI chat widget
│   │   │   ├── announcement-bar.tsx  # Top announcement bar
│   │   │   ├── brand-story.tsx       # Brand story section
│   │   │   ├── footer.tsx            # Footer component
│   │   │   ├── hero-carousel.tsx     # Hero carousel with images
│   │   │   ├── navbar.tsx            # Navigation bar
│   │   │   ├── product-card.tsx      # Individual product card
│   │   │   ├── products-section.tsx  # Products grid section
│   │   │   └── soul-stone-matcher.tsx # AI-powered stone matcher
│   │   └── ui/                       # Reusable UI components
│   │       ├── button.tsx            # Button component
│   │       ├── input.tsx             # Input component
│   │       └── section-heading.tsx   # Section heading component
│   └── lib/
│       ├── data.ts                   # Static data (products, carousel)
│       ├── gemini.ts                 # Gemini API client function
│       └── types.ts                  # TypeScript type definitions
├── .gitignore
├── next.config.mjs                    # Next.js configuration
├── package.json                      # Dependencies
├── postcss.config.mjs                # PostCSS configuration
├── README.md                         # Project documentation
├── STRUCTURE.md                      # This file
├── tailwind.config.ts                # Tailwind CSS configuration
└── tsconfig.json                     # TypeScript configuration
```

## Key Features

- **Next.js 14+ App Router**: Modern routing with server and client components
- **TypeScript Strict Mode**: Full type safety
- **Tailwind CSS**: Utility-first styling with custom animations
- **Modular Components**: Separated into UI and feature components
- **Gemini API Integration**: AI-powered features via API route
- **Responsive Design**: Mobile-first approach
- **Accessibility**: ARIA labels and semantic HTML

