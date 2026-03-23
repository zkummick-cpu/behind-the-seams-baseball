# Behind the Seams Baseball — Setup Guide

## Step 1: Set up your Supabase database

1. Go to supabase.com/dashboard → your project
2. Click "SQL Editor" in the left sidebar
3. Copy everything from the `supabase/schema.sql` file
4. Paste it in and click "Run"
5. You should see "Success" — this creates the purchases table

---

## Step 2: Add environment variables to Vercel

1. Go to vercel.com → your project → Settings → Environment Variables
2. Add each of these (Name = Value):

```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY  = pk_live_51RVkcrE0ePNbtD9w...
STRIPE_SECRET_KEY                   = sk_live_... (your new rolled key)
STRIPE_WEBHOOK_SECRET               = whsec_... (get this in Step 3)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY   = pk_test_cmVsYXhpbmctYmlzb24...
CLERK_SECRET_KEY                    = sk_test_edu2tWDisR4H8I9w...
NEXT_PUBLIC_CLERK_SIGN_IN_URL       = /sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL       = /sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL = /dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL = /dashboard
NEXT_PUBLIC_SUPABASE_URL            = https://novzumdkyezdtqmwkmki.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY       = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY           = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
RESEND_API_KEY                      = re_hFN9YRe1_NsY8f6UZrKXLj8DUtQPpnHEm
NEXT_PUBLIC_APP_URL                 = https://yourdomain.com
```

---

## Step 3: Set up Stripe Webhook

1. Go to dashboard.stripe.com → Developers → Webhooks
2. Click "Add endpoint"
3. URL: https://yourdomain.com/api/webhook
4. Events to listen for: check `checkout.session.completed`
5. Click "Add endpoint"
6. Click "Reveal" on the Signing secret → copy the `whsec_...` value
7. Add it to Vercel as STRIPE_WEBHOOK_SECRET

---

## Step 4: Set up Resend domain

1. Go to resend.com → Domains
2. Add your domain
3. Follow their DNS instructions in GoDaddy
4. Once verified, update the "from" email in:
   - app/api/webhook/route.ts
   - app/api/contact/route.ts

---

## Step 5: Push to GitHub

Upload ALL files in this folder to your GitHub repo.
Vercel will automatically detect Next.js and deploy.

---

## Step 6: Set Clerk redirect URLs

1. Go to dashboard.clerk.com → your app → Settings
2. Add your domain to "Allowed origins"
3. That's it!
