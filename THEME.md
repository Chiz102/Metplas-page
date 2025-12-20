# Metplastech Theme System

## Overview
All colors in the Metplastech frontend are centralized in CSS variables defined in `src/styles.scss` under the `:root` selector. This allows you to easily change the entire theme by modifying just a few color values.

## Color Palette Structure

### Primary Colors
```css
--color-primary: #0a1628;           /* Deep industrial blue - main background */
--color-primary-light: #142238;     /* Lighter variant for surfaces */
--color-primary-dark: #060d18;      /* Darker variant for depth */
```

### Accent Colors (Cyan/Teal - Main Theme)
```css
--color-accent: #00d4ff;              /* Primary accent color */
--color-accent-secondary: #00ff9d;    /* Secondary accent (green tint) */
--color-accent-light: rgba(0, 212, 255, 0.1);          /* 10% opacity */
--color-accent-medium: rgba(0, 212, 255, 0.15);        /* 15% opacity */
--color-accent-strong: rgba(0, 212, 255, 0.3);         /* 30% opacity */
--color-accent-glow: rgba(0, 212, 255, 0.4);           /* For glowing effects */
--color-accent-secondary-light: rgba(0, 255, 157, 0.05);      /* 5% opacity */
--color-accent-secondary-medium: rgba(0, 255, 157, 0.1);      /* 10% opacity */
```

### CTA Colors (Warm Orange/Red)
```css
--color-cta: #ff6b35;                 /* Call-to-action button color */
--color-cta-hover: #ff8a5c;          /* Hover state */
--color-cta-glow: rgba(255, 107, 53, 0.3);      /* Glow effect */
--color-cta-glow-hover: rgba(255, 107, 53, 0.4); /* Glow on hover */
```

### Neutral/Surface Colors
```css
--color-surface: #0f1c2e;             /* Card/container background */
--color-surface-elevated: #1a2940;    /* Slightly lighter surface */
```

### Border Colors
```css
--color-border: rgba(0, 212, 255, 0.15);       /* Subtle borders */
--color-border-strong: rgba(0, 212, 255, 0.3); /* More prominent borders */
```

### Text Colors
```css
--color-text-primary: #ffffff;              /* Main text */
--color-text-secondary: rgba(255, 255, 255, 0.7);  /* Secondary text */
--color-text-muted: rgba(255, 255, 255, 0.5);      /* Muted/helper text */
```

## Gradients
```css
--gradient-accent: linear-gradient(135deg, var(--color-accent) 0%, #00a8cc 100%);
--gradient-accent-full: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-secondary) 100%);
--gradient-cta: linear-gradient(135deg, var(--color-cta) 0%, #ff4444 100%);
```

## Shadows
```css
--shadow-glow: 0 0 40px var(--color-accent-glow);
--shadow-card: 0 4px 24px rgba(0, 0, 0, 0.3);
--shadow-elevated: 0 8px 40px rgba(0, 0, 0, 0.4);
--shadow-cta: 0 4px 20px var(--color-cta-glow);
--shadow-cta-hover: 0 8px 30px var(--color-cta-glow-hover);
```

## How to Change the Theme

### Example 1: Change Primary Accent Color
To change from cyan (#00d4ff) to a different color, e.g., purple (#9d4edd):

```scss
// In src/styles.scss :root section
--color-accent: #9d4edd;              /* Purple instead of cyan */
--color-accent-secondary: #5a189a;    /* Darker purple variant */
--color-accent-glow: rgba(157, 78, 221, 0.4);
```

The entire app will automatically update since all components use these variables.

### Example 2: Change CTA Color
To change the call-to-action from orange (#ff6b35) to a different color:

```scss
--color-cta: #ef476f;                 /* New CTA color */
--color-cta-hover: #ff5e7e;          /* Hover variant */
--color-cta-glow: rgba(239, 71, 111, 0.3);
--color-cta-glow-hover: rgba(239, 71, 111, 0.4);
```

### Example 3: Change Background/Surface Colors
To lighten or darken the overall background:

```scss
--color-primary: #1a2f4f;           /* Lighter background */
--color-surface: #192238;            /* Adjusted surface */
--color-surface-elevated: #243445;   /* Adjusted elevated surface */
```

### Example 4: Dark to Light Mode
Switch to a light theme by updating primary colors:

```scss
--color-primary: #ffffff;
--color-primary-light: #f5f5f5;
--color-primary-dark: #eeeeee;
--color-surface: #fafafa;
--color-surface-elevated: #f0f0f0;
--color-text-primary: #1a1a1a;
--color-text-secondary: rgba(0, 0, 0, 0.7);
--color-text-muted: rgba(0, 0, 0, 0.5);
```

## Components Using Theme Variables

All of these components automatically use the theme system:

- ✅ `src/styles.scss` - Global styles
- ✅ `src/app/pages/home/home.component.ts`
- ✅ `src/app/pages/catalog/catalog.component.ts`
- ✅ `src/app/pages/about/about.component.ts`
- ✅ `src/app/pages/contact/contact.component.ts`
- ✅ `src/app/components/header/header.component.ts`
- ✅ `src/app/components/footer/footer.component.ts`
- ✅ `src/app/components/whatsapp-button/whatsapp-button.component.ts`

## Best Practices

1. **Always use CSS variables** - Never hardcode colors in component styles
2. **Use semantic variable names** - `--color-accent` instead of `--color-blue`
3. **Leverage opacity variants** - Use existing opacity levels (`--color-accent-light`, `-medium`, `-strong`)
4. **Test gradients** - When changing accent colors, update the gradient variables too
5. **Keep consistency** - Maintain the same opacity levels across similar color types

## Quick Reference - Color Usage by Component

| Component | Uses |
|-----------|------|
| Buttons | `--gradient-accent`, `--gradient-cta`, `--color-primary` |
| Cards | `--color-surface`, `--color-border`, `--shadow-card` |
| Hero Sections | `--color-accent-light`, `--gradient-accent-full` |
| Icons | `--color-accent`, `--color-primary` |
| Text | `--color-text-primary`, `--color-text-secondary`, `--color-text-muted` |
| Borders | `--color-border`, `--color-border-strong` |
| Glows/Effects | `--shadow-glow`, `--color-accent-glow` |

## Tips for Maintenance

1. **Batch changes** - Make all related color changes together
2. **Test all pages** - Verify changes look good across all routes
3. **Comment changes** - If making theme updates, comment why
4. **Version control** - Always commit theme changes separately for easy tracking

---

Last Updated: December 2024
