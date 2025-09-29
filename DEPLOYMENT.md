# Deployment Guide

## Quick Deployment to Vercel

### Option 1: Using Vercel CLI (Recommended)

1. **Install Vercel CLI** (if not already installed):
```bash
npm install -g vercel
```

2. **Login to Vercel**:
```bash
vercel login
```

3. **Deploy the project**:
```bash
vercel --prod
```

4. **Follow the prompts**:
   - Set up and deploy? `Y`
   - Which scope? Choose your account
   - Link to existing project? `N`
   - Project name: `deliverx` (or your preferred name)
   - Directory: `.` (current directory)
   - Override settings? `N`

### Option 2: Using Vercel Dashboard

1. **Go to [vercel.com](https://vercel.com)**
2. **Sign in** with your GitHub, GitLab, or Bitbucket account
3. **Click "New Project"**
4. **Import your repository** or drag and drop the project folder
5. **Configure build settings**:
   - Framework Preset: `Other`
   - Build Command: `npm run build`
   - Output Directory: `.`
   - Install Command: `npm install`
6. **Click "Deploy"**

### Option 3: Using GitHub Integration

1. **Push your code to GitHub**
2. **Connect your GitHub account to Vercel**
3. **Import the repository**
4. **Vercel will automatically detect the settings and deploy**

## Alternative Deployment Platforms

### Netlify

1. **Go to [netlify.com](https://netlify.com)**
2. **Drag and drop** your project folder
3. **Configure build settings**:
   - Build command: `npm run build`
   - Publish directory: `.`
4. **Deploy**

### GitHub Pages

1. **Push your code to GitHub**
2. **Go to repository Settings**
3. **Scroll to Pages section**
4. **Select source**: Deploy from a branch
5. **Choose branch**: `main` or `master`
6. **Select folder**: `/` (root)
7. **Save**

## Local Development

### Start Development Server

```bash
# Install dependencies
npm install

# Watch SCSS changes and start server
npm run dev
```

### Build for Production

```bash
# Build SCSS to CSS
npm run build

# The project is ready for deployment
```

## Project Structure

```
deliverx/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Compiled CSS
├── js/
│   └── scripts.js      # JavaScript animations
├── scss/
│   └── styles.scss     # SCSS source
├── package.json        # Dependencies
├── vercel.json         # Vercel config
└── README.md           # Documentation
```

## Troubleshooting

### Common Issues

1. **SCSS not compiling**: Run `npm run build`
2. **Animations not working**: Check browser console for GSAP errors
3. **Responsive issues**: Test on different screen sizes
4. **Font Awesome icons not showing**: Check CDN link in HTML

### Performance Optimization

1. **Minify CSS**: Use `sass --style compressed`
2. **Optimize images**: Compress images before adding
3. **Enable gzip**: Most hosting platforms do this automatically

## Live Demo

Once deployed, your project will be available at:
- Vercel: `https://your-project-name.vercel.app`
- Netlify: `https://your-project-name.netlify.app`
- GitHub Pages: `https://your-username.github.io/repository-name`

## Support

For deployment issues:
1. Check the platform's documentation
2. Verify all files are in the correct directory
3. Ensure build commands are correct
4. Check browser console for errors
