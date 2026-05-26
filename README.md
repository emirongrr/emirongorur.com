# emirongorur.com

Personal portfolio for Emir Öngörür, built with Next.js, Tailwind CSS, i18next, and Sanity.

## Getting Started

Install dependencies:

```bash
npm ci
```

Create a local environment file:

```bash
cp .env.example .env.local
```

Set the Sanity values in `.env.local`, then start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality Checks

```bash
npm run lint
npm run build
```

The production build requires valid Sanity environment variables because project data is fetched while static pages are generated.

## SEO Structure

The app uses localized routes under `/en` and `/tr`, route-level metadata, canonical and alternate links, sitemap alternates, robots configuration, and JSON-LD for the website, person profile, navigation, and breadcrumbs. Google sitelinks are not manually controlled, but this structure gives crawlers clear signals for pages like About, Projects, and Blog.
