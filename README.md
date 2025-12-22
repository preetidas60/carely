src/
├─ routes/
│ └─ AppRoutes.tsx
│
├─ layouts/
│ ├─ MainLayout.tsx
│ ├─ AuthLayout.tsx
│ └─ DashboardLayout.tsx
│
├─ pages/
│ ├─ Home/
│ │ ├─ HomePage.tsx
│ │ └─ sections/
│ │ ├─ HomeHero.tsx
│ │ ├─ Features.tsx
│ │ └─ CTA.tsx
│ │
│ ├─ About/
│ │ └─ AboutPage.tsx
│ │
│ ├─ Pricing/
│ │ ├─ PricingPage.tsx
│ │ └─ sections/
│ │ └─ PricingHero.tsx
│ │
│ ├─ Auth/
│ │ ├─ LoginPage.tsx
│ │ └─ RegisterPage.tsx
│ │
│ ├─ Dashboard/
│ │ ├─ DashboardPage.tsx
│ │ └─ components/
│ │ └─ StatsCard.tsx
│
├─ components/
│ ├─ layout/
│ │ ├─ Navbar.tsx
│ │ └─ Footer.tsx
│ │
│ ├─ ui/
│ │ ├─ Button.tsx
│ │ ├─ Input.tsx
│ │ ├─ Modal.tsx
│ │ └─ Card.tsx
│ │
│ ├─ hero/
│ │ └─ BaseHero.tsx // optional shared hero base
│
├─ hooks/
│ ├─ useAuth.ts
│ └─ useDebounce.ts
│
├─ services/
│ ├─ api.ts
│ ├─ auth.service.ts
│ └─ user.service.ts
│
├─ store/ // if using Zustand / Redux
│ └─ auth.store.ts
│
├─ types/
│ ├─ user.ts
│ └─ api.ts
│
├─ utils/
│ ├─ constants.ts
│ └─ helpers.ts
│
├─ assets/
│ ├─ images/
│ └─ icons/
│
└─ styles/
└─ globals.css
