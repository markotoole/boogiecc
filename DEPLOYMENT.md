# Deploying to Vercel

This document outlines the steps to deploy the Boogie website to Vercel.

## Prerequisites

- A GitHub account
- A Vercel account (you can sign up at [vercel.com](https://vercel.com) using your GitHub account)
- The project pushed to a GitHub repository

## Deployment Steps

1. **Push your code to GitHub**

   Make sure all your changes are committed and pushed to your GitHub repository.

2. **Connect Vercel to GitHub**

   - Log in to your Vercel account
   - Click on "Add New..." and select "Project"
   - Connect your GitHub account if you haven't already
   - Select the repository containing your Boogie website

3. **Configure the Project**

   - Vercel will automatically detect that it's a Next.js project
   - Keep the default settings for:
     - Framework Preset: Next.js
     - Root Directory: ./
     - Build Command: `next build`
     - Output Directory: .next
   - Add any environment variables if needed (none required for basic deployment)

4. **Deploy**

   - Click "Deploy"
   - Vercel will build and deploy your site
   - Once complete, you'll receive a URL to your deployed site (e.g., `boogie.vercel.app`)

## Custom Domain Setup (Optional)

To use a custom domain (e.g., boog.ie):

1. In your Vercel project, go to "Settings" > "Domains"
2. Add your custom domain
3. Follow the instructions to configure your domain's DNS settings
4. Vercel will automatically provision an SSL certificate

## Continuous Deployment

- Vercel automatically deploys when you push changes to the connected GitHub repository
- Each pull request gets its own preview deployment
- Production branch (main/master) updates trigger updates to your main deployment

## Troubleshooting

If you encounter any issues during deployment:

1. Check the build logs in Vercel
2. Make sure all dependencies are installed correctly
3. Verify that your Next.js application builds successfully locally with `npm run build`
4. Check that environment variables are set correctly in Vercel

## Vercel-Specific Features

Consider using these Vercel features to enhance your site:

- **Analytics**: Monitor site performance and user behavior
- **Edge Functions**: Improve performance with edge computing capabilities
- **Image Optimization**: Already enabled with Next.js Image component
- **Serverless Functions**: Handle API routes efficiently