# Google Analytics & Search Console Setup Guide

This guide will walk you through setting up Google Analytics and Google Search Console for your Boogie website to start gathering analytics data and improve SEO.

## 🚀 Quick Overview

Your site already has:
- ✅ **Dynamic Sitemap** - Automatically updates with new Sanity content at `/sitemap.xml`
- ✅ **Robots.txt** - Search engine guidelines at `/robots.txt`
- ✅ **Structured Data** - Rich snippets for better search results
- ✅ **Google Analytics Component** - Ready to track visitors (needs setup)

## 📊 Google Analytics Setup

### Step 1: Create Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click "Start measuring"
4. Create a new account:
   - Account name: "Boogie"
   - Check the boxes for data sharing settings (recommended)

### Step 2: Set Up Property

1. Property name: "Boogie Website"
2. Reporting time zone: Choose your timezone
3. Currency: Choose your currency
4. Click "Next"

### Step 3: Choose Business Information

1. Industry category: "Arts & Entertainment" or "Music"
2. Business size: Select appropriate size
3. How you plan to use Google Analytics: Select relevant options
4. Click "Create"

### Step 4: Set Up Data Collection

1. Choose "Web" as your platform
2. Website URL: `https://boogiecc.vercel.app`
3. Stream name: "Boogie Website"
4. Click "Create stream"

### Step 5: Get Your Measurement ID

1. You'll see your **Measurement ID** (format: G-XXXXXXXXXX)
2. Copy this ID - you'll need it next

### Step 6: Add to Your Website

1. In your **local environment**, create or update your `.env.local` file:
   ```bash
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX  # Replace with your actual ID
   ```

2. **For Vercel deployment**, add this environment variable:
   - Go to your Vercel dashboard
   - Select your project
   - Go to Settings → Environment Variables
   - Add: `NEXT_PUBLIC_GA_MEASUREMENT_ID` with your measurement ID
   - Redeploy your site

## 🔍 Google Search Console Setup

### Step 1: Access Search Console

1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Sign in with the same Google account used for Analytics

### Step 2: Add Your Property

1. Click "Add Property"
2. Choose "URL prefix" method
3. Enter: `https://boogiecc.vercel.app`
4. Click "Continue"

### Step 3: Verify Ownership

Choose **HTML tag method** (recommended):

1. Google will show you a verification meta tag like:
   ```html
   <meta name="google-site-verification" content="ABC123...XYZ" />
   ```

2. Copy the content value (the part between quotes after `content=`)

3. Add it to your `.env.local` file:
   ```bash
   GOOGLE_SITE_VERIFICATION=ABC123...XYZ  # Replace with your code
   ```

4. **Update your layout.tsx** (or I can do this for you):
   - Uncomment the meta tag in the head section
   - The site will automatically use your verification code

5. **For Vercel**, add the environment variable there too and redeploy

6. Go back to Search Console and click "Verify"

### Step 4: Submit Your Sitemap

1. In Search Console, go to "Sitemaps" in the left sidebar
2. Enter: `sitemap.xml`
3. Click "Submit"

Your sitemap will be automatically processed and updated as you add content through Sanity!

## 🔗 Linking Analytics & Search Console

1. In Google Analytics, go to Admin (gear icon)
2. In the Property column, click "Product Linking"
3. Click "Search Console Linking"
4. Click "Link" and select your Search Console property
5. Choose your Analytics views to link
6. Click "Save"

## 📈 What You'll Get

### Google Analytics will track:
- **Visitor numbers** and demographics
- **Page views** and popular content
- **Traffic sources** (search, social, direct)
- **User behavior** and engagement
- **Conversion tracking** (contact form submissions)

### Google Search Console will show:
- **Search performance** (clicks, impressions, CTR)
- **Which keywords** bring visitors
- **Indexing status** of your pages
- **Mobile usability** issues
- **Core Web Vitals** performance data

## 🛠️ Advanced Features Available

### Custom Event Tracking
The site includes a `trackEvent` function for custom analytics:

```javascript
import { trackEvent } from '@/components/GoogleAnalytics'

// Track contact form submissions
trackEvent('form_submit', {
  form_name: 'contact',
  method: 'email'
})

// Track artist page visits
trackEvent('page_view', {
  page_type: 'artist',
  artist_name: 'Count Nine'
})
```

### Structured Data Benefits
Your site automatically includes rich data for:
- **Organization info** (name, logo, contact)
- **Website search functionality**
- **Artist profiles** (when you add them via Sanity)

This helps Google understand your content and may show rich snippets in search results!

## 🚨 Important Notes

1. **Analytics data** takes 24-48 hours to start appearing
2. **Search Console** can take several days to show data
3. **Sitemap** updates automatically when you publish new content in Sanity
4. **Environment variables** must be set in both local development AND Vercel for production

## 🆘 Need Help?

If you need assistance with any of these steps, let me know! I can:
- Help update the verification code in your layout
- Set up custom event tracking for specific actions
- Add more structured data for better SEO
- Create custom analytics dashboards

## 📱 Next Steps After Setup

1. **Monitor initial data** (first week)
2. **Set up goals** in Analytics (contact form completions)
3. **Check mobile performance** in Search Console
4. **Monitor search keywords** and optimize content accordingly
5. **Track artist page performance** and popular content
