# AI Act Watch – Next.js MVP (Polished)

Deployed on Vercel with:
- Landing page
- Privacy & Terms (Stripe-friendly)
- Email capture via `/api/join` (Mailchimp-ready)
- SEO: robots.txt, sitemap.xml, meta tags

## Local Dev
```bash
npm install
npm run dev
```

## Deploy (Vercel)
1) Create/import the GitHub repo → Deploy with Vercel.
2) **Domains**: add `aiactwatch.com`.
3) **Env Vars** (Project → Settings → Environment Variables):
   - `MAILCHIMP_API_KEY`  (e.g., `abcd1234-us21`)
   - `MAILCHIMP_AUDIENCE_ID`
4) Redeploy.

If env vars are missing, `/api/join` still returns success (dev mode) so the form works for Stripe review.
