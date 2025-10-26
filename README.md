# Growth Key Marketing - Landing Page

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Project Overview

This landing page project was developed with a focus on **reusability**, **maintainability**, and **speed**. The codebase follows atomic design principles with a component-based architecture that can be easily packaged and reused across multiple landing pages.

### Key Features

- ✨ **Reusable Components**: Built with reusability in mind, all components can be packaged and shared across multiple landing pages
- 🎨 **Atomic Design System**: Implemented Atomic Design principles (Atoms, Molecules, Organisms) for better structure and maintainability
- 🚀 **AI-Enhanced Animations**: Custom animations designed with AI assistance for smooth user experience
- 📦 **Component Library**: Ready to be packaged as a Git repository for cross-project usage
- ⚡ **Fast Development**: Optimized structure for rapid development of landing pages

### Architecture

```
src/
├── shared/
│   ├── components/
│   │   ├── atoms/       # Basic building blocks (Button, Typography, Box, Avatar)
│   │   ├── molecules/   # Complex components (SinLine, IPhone3D, Stats)
│   │   └── organisms/   # Complete sections (Header, TrustBanner)
│   ├── animations/      # Reusable animation components
│   └── theme/           # Styling and theme configuration
└── app/                 # Next.js app directory
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Project Goals

- **Reusability**: All components are built to be reusable across different landing pages
- **Maintainability**: Clean code structure following best practices
- **Speed**: Quick development of landing pages using pre-built components
- **Scalability**: Easy to extend and maintain as the project grows

## Package Future

The component library is designed to be extracted as a separate package for use across all landing pages:

```bash
# Future usage
import { Button, Typography, IPhone3D } from '@growth-key/components';
```

This will significantly speed up development for future landing pages.

## Notes

- Components follow Atomic Design principles for better organization
- Animations were created with AI assistance for optimal user experience
- Color scheme coordination with designers is needed for perfect gradient implementation
- The project was developed with limited time focused on delivering a working solution

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
