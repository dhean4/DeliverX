#!/bin/bash

# DeliverX Deployment Script
echo "🚀 Starting DeliverX deployment..."

# Build SCSS
echo "📦 Building SCSS..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ SCSS build successful"
else
    echo "❌ SCSS build failed"
    exit 1
fi

# Check if Vercel CLI is installed
if command -v vercel &> /dev/null; then
    echo "🌐 Deploying to Vercel..."
    vercel --prod --yes
else
    echo "⚠️  Vercel CLI not found. Please install it first:"
    echo "   npm install -g vercel"
    echo ""
    echo "📁 Project is ready for manual deployment:"
    echo "   1. Upload all files to your hosting platform"
    echo "   2. Ensure index.html is in the root directory"
    echo "   3. Make sure css/styles.css is accessible"
    echo "   4. Check that js/scripts.js is accessible"
fi

echo "🎉 Deployment process completed!"
