# Carely

A modern healthcare management application built with React, TypeScript, and Vite.

## Features

- **Dashboard**: Comprehensive healthcare management dashboard
- **User Authentication**: Secure login and registration system
- **Feature Pages**: Detailed information about platform capabilities
- **FAQ Section**: Answers to common questions
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first styling

## Project Structure

```
src/
├── routes/           # Route definitions
├── layouts/          # Layout components (Main, Auth, Dashboard)
├── pages/            # Page components organized by feature
├── components/       # Reusable UI components
│   ├── layout/      # Navbar, Footer
│   └── ui/          # Button, Input, Modal, Card
├── hooks/            # Custom React hooks
├── services/         # API and service layer
├── store/            # State management
├── types/            # TypeScript type definitions
├── utils/            # Helper functions and constants
├── assets/           # Static files (images, icons)
└── styles/           # Global styles
```

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn/pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/preetidas60/carely.git
cd carely

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
# Start the development server
npm run dev
# or
yarn dev
# or
pnpm dev
```

The application will be available at `http://localhost:5173`

### Build

```bash
# Create production build
npm run build
# or
yarn build
# or
pnpm build
```

### Preview Production Build

```bash
# Preview the production build locally
npm run preview
# or
yarn preview
# or
pnpm preview
```

## Code Style

This project uses ESLint and Prettier for code formatting. Run the linter with:

```bash
npm run lint
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide](https://lucide.dev/)
