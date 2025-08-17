# Creative Agency Portfolio Website

A modern, responsive creative agency portfolio website built with Next.js, Tailwind CSS, and Framer Motion. Inspired by contemporary design trends with smooth animations and a dark, professional aesthetic.

## 🚀 Features

- **Modern Design**: Dark theme with gradient accents and glassmorphism effects
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Performance Optimized**: Built with Next.js for fast loading and SEO
- **Contact Form**: Functional contact form with API endpoint
- **Scroll Animations**: Elements animate into view as users scroll
- **Interactive Navigation**: Sticky header with smooth scroll navigation

## 🛠️ Technologies Used

- **Next.js 15** - React framework for production
- **React 19** - JavaScript library for building user interfaces
- **Tailwind CSS v4** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library for React

## 📁 Project Structure

```
vishalsite/
├── components/
│   ├── Header.jsx          # Navigation with sticky scroll behavior
│   ├── Hero.jsx            # Full-screen hero section with animations
│   ├── Services.jsx        # Services grid with hover effects
│   ├── Portfolio.jsx       # Project showcase with filtering
│   ├── About.jsx           # Company information and values
│   ├── Contact.jsx         # Contact form and information
│   └── Footer.jsx          # Footer with social links
├── pages/
│   ├── api/
│   │   └── contact.js      # Contact form API endpoint
│   └── index.jsx           # Main page layout
├── src/app/
│   ├── globals.css         # Global styles and Tailwind imports
│   ├── layout.js           # Root layout component
│   └── page.js             # Main page component
├── styles/
│   └── globals.css         # Extended global styles with custom utilities
├── public/
│   └── images/             # Static images and assets
└── README.md
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

You can start editing the page by modifying `src/app/page.js`. The page auto-updates as you edit the file.

## 📧 Contact Form Setup

The contact form is ready to use with a basic API endpoint at `/api/contact`. Currently logs submissions to console. To enable email functionality, update `pages/api/contact.js` with your preferred email service.

## 🖼️ Adding Images

Replace placeholder images in the `public/images/` directory with your actual project images and branding assets.

## 🎯 Customization

- Update company name and branding in components
- Modify colors in `tailwind.config.ts`
- Edit content in individual component files
- Replace placeholder text and images

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
