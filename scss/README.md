# SCSS Structure Documentation

This directory contains all SCSS source files that compile into `css/styles.css`.

## File Structure

```
scss/
├── styles.scss              # Main entry point (imports all partials)
├── _variables.scss          # SCSS variables (colors, spacing, typography)
├── _mixins.scss             # Reusable SCSS mixins
└── _webflow-normalize.scss  # Complete Webflow styles and base CSS
```

## Files Overview

### `styles.scss` (Main Entry Point)
The main SCSS file that imports all partials. This is the file that gets compiled.

**Usage:**
```bash
# Compile SCSS to CSS
npm run build

# Watch for changes
npm run watch

# Development mode
npm run dev
```

### `_variables.scss`
Contains all SCSS variables used throughout the project:
- **Colors**: Primary, accent, neutral palette, semantic colors
- **Typography**: Font families, sizes, weights, line-heights
- **Spacing**: Consistent spacing scale (4px to 200px)
- **Border Radius**: All border radius values
- **Shadows**: Box shadow presets
- **Breakpoints**: Responsive breakpoints
- **Transitions**: Animation timing

**Example:**
```scss
$color-primary: #6146ff;
$spacing-32px: 32px;
$border-radius-16px: 16px;
```

### `_mixins.scss`
Reusable SCSS mixins for common patterns:
- **Responsive breakpoints**: `@include mobile`, `@include tablet`, etc.
- **Flexbox utilities**: `@include flex-center`, `@include flex-between`
- **Component bases**: `@include button-base`, `@include card-base`
- **Cross-browser prefixes**: Transform, border-radius, box-shadow

**Example:**
```scss
.my-element {
  @include flex-center;
  @include border-radius(16px);

  @include tablet {
    // Styles for tablet and below
  }
}
```

### `_webflow-normalize.scss`
Contains all the existing styles from the original CSS file:
- CSS normalization and resets
- Webflow framework styles
- All component styles
- Utility classes
- Media queries
- Font-face declarations

## How to Use

### 1. Making Changes
Edit the SCSS files in this directory:
```bash
# For variables
scss/_variables.scss

# For mixins
scss/_mixins.scss

# For all other styles
scss/_webflow-normalize.scss
```

### 2. Compiling
After making changes, compile to CSS:
```bash
npm run build
```

### 3. Development Workflow
Use watch mode during development:
```bash
npm run watch
# or
npm run dev
```

This will automatically recompile CSS whenever you save SCSS files.

## Adding New Styles

### Option 1: Using Variables and Mixins
Create new styles using the existing variables and mixins:

```scss
// In _webflow-normalize.scss
.my-new-component {
  padding: $spacing-32px;
  background: $color-primary;
  @include border-radius($border-radius-16px);

  @include tablet {
    padding: $spacing-16px;
  }
}
```

### Option 2: Creating New Partials
For large additions, create a new partial:

1. Create a new file: `scss/_your-partial.scss`
2. Import it in `styles.scss`:
```scss
@import 'your-partial';
```

## SCSS Features Used

### Variables
```scss
$color-primary: #6146ff;
$spacing-32px: 32px;

.element {
  color: $color-primary;
  padding: $spacing-32px;
}
```

### Nesting
```scss
.card {
  padding: $spacing-32px;

  &:hover {
    transform: translateY(-4px);
  }

  .card-title {
    font-size: $font-size-600;
  }
}
```

### Mixins
```scss
@mixin button-base {
  padding: 14px 28px;
  border-radius: $border-radius-full;
  transition: $transition-base;
}

.btn {
  @include button-base;
}
```

### @use vs @import
This project uses modern `@use` syntax for variables and mixins:
```scss
@use 'variables' as *;  // Modern syntax
@use 'mixins' as *;     // Modern syntax
@import 'webflow-normalize';  // Legacy syntax (for full file import)
```

## Build Output

The SCSS compiles to `css/styles.css`:
- **Expanded format** (default): Easy to read, for development
- **Compressed format**: Minified, for production (use `npm run build:compressed`)

## Troubleshooting

### Build Errors
```bash
# Check SCSS syntax
npm run build

# Common issues:
# - Missing semicolons
# - Unclosed brackets
# - Invalid variable names
```

### Changes Not Appearing
```bash
# Force rebuild
rm css/styles.css
npm run build

# Clear browser cache
# Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
```

### Source Maps
Source maps are disabled by default. To enable for debugging:
```bash
sass scss/styles.scss css/styles.css --source-map
```

## Best Practices

1. **Use Variables**: Always use variables for colors, spacing, and other repeated values
2. **Keep Partials Organized**: Group related styles together
3. **Use Mixins**: Create mixins for repeated patterns
4. **Mobile First**: Write mobile styles first, then use media query mixins
5. **Comment Your Code**: Add comments for complex styles or sections
6. **Test After Changes**: Always run `npm run build` and test in browser

## Resources

- [Sass Documentation](https://sass-lang.com/documentation)
- [SCSS Best Practices](https://sass-guidelin.es/)
- [Variables Guide](https://sass-lang.com/documentation/variables)
- [Mixins Guide](https://sass-lang.com/documentation/at-rules/mixin)