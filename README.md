This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Directory hierarchy

project/
├── app/
│   ├── api/                # Route API (opzionale)
│   ├── (dashboard)/        # Gruppo di route (facoltativo per organizzare sezioni)
│   │   ├── page.tsx        # Entry point di una sezione
│   │   ├── settings/       # Sotto-sezione
│   │   │   ├── page.tsx
│   │   │   └── component.tsx
│   ├── layout.tsx          # Layout globale
│   ├── page.tsx            # Homepage
│   ├── about/              # Cartella per la pagina "About"
│   │   ├── page.tsx
│   │   └── components/     # Componenti specifici per questa pagina
│   │       └── AboutCard.tsx
│   ├── blog/               # Sezione blog
│   │   ├── [slug]/         # Dynamic route per i post
│   │   │   └── page.tsx
│   │   ├── page.tsx        # Pagina index del blog
│   │   └── components/     # Componenti specifici del blog
│   └── styles/             # Stili condivisi o relativi a pagine
├── components/             # Componenti globali
│   ├── Navbar.tsx
│   ├── Footer.tsx
├── public/                 # Risorse pubbliche (immagini, icone, font, ecc.)
├── styles/                 # Stili globali (Tailwind, CSS o SCSS)
│   └── globals.css
├── utils/                  # Funzioni helper e utility
├── middleware.ts           # Middleware globale (opzionale)
├── next.config.js          # Configurazione Next.js
└── tsconfig.json           # Configurazione TypeScript

## Page hierarchy

app/
├── blog/
│   ├── page.tsx          # Pagina principale del blog
│   ├── components/
│   │   └── BlogList.tsx  # Componente per la lista dei post
│   ├── [slug]/
│   │   ├── page.tsx      # Pagina dinamica per ogni post
│   │   └── components/
│   │       └── PostContent.tsx  # Componente specifico per il contenuto del post
