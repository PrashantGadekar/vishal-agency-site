# Project Structure Rules

This project uses **Next.js App Router ONLY** (Next.js 13+).

## ✅ Correct Structure (App Router):
```
src/
├── app/
│   ├── page.js                 # Homepage (replaces pages/index.js)
│   ├── layout.js               # Root layout
│   ├── globals.css             # Global styles
│   └── api/
│       └── contact/
│           └── route.js        # API route (replaces pages/api/contact.js)
└── components/
    ├── Header.jsx
    ├── Hero.jsx
    └── ...other components
```

## ❌ NEVER Create These (Pages Router):
```
pages/                          # Will cause conflicts!
├── index.js                    # Conflicts with src/app/page.js
├── _app.js                     # Not needed in App Router
└── api/
    └── contact.js              # Conflicts with src/app/api/contact/route.js

components/                     # Use src/components/ instead
styles/                         # Use src/app/globals.css instead
```

## 🚨 Conflict Prevention Rules:

1. **ONLY use `src/app/` for pages and API routes**
2. **ONLY use `src/components/` for components**
3. **NEVER create `pages/` directory**
4. **NEVER create root-level `components/` or `styles/` directories**

## 🛠️ If Conflicts Occur:

1. Delete conflicting directories:
   ```bash
   Remove-Item -Recurse -Force pages, components, styles
   ```

2. Clear Next.js cache:
   ```bash
   Remove-Item -Recurse -Force .next
   ```

3. Restart development server:
   ```bash
   npm run dev
   ```

## 📁 Current Valid Structure:
- ✅ `src/app/page.js` - Homepage
- ✅ `src/app/layout.js` - Root layout
- ✅ `src/app/api/contact/route.js` - Contact API
- ✅ `src/components/` - All React components
- ✅ `src/app/globals.css` - Global styles
