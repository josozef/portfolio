# Quick Reference Guide

Common tasks and code snippets for maintaining and extending the portfolio.

## Adding Content

### Add a New Case Study

1. **Add data** to `src/data/caseStudies.js`:

```javascript
{
  id: "project-id",
  name: "Project Name",
  slug: "project-slug",
  client: "Client Name",
  logo: "logo-filename", // without .png
  brandTheme: "client", // optional: for custom brand colors
  roles: ["Role 1", "Role 2"],
  year: "2023",
  summary: "Brief summary for card...",
  description: "Detailed description for hero...",
  heroImage: "hero.jpg", // optional
  challenge: "What was the challenge...",
  solution: "How you solved it...",
  impact: ["Impact item 1", "Impact item 2"]
}
```

2. **Add images**:
   - Logo: `src/images/logos/logo-filename.png`
   - Card: `src/images/projectcards/project-id.png`
   - Hero: `src/images/projectassets/project-id/hero.jpg` (optional)

3. **Add brand colors** (optional) to `src/styles/base/brands.css`:

```css
:root {
  --client-primary: #000000;
  --client-primary-dark: #000000;
  --client-primary-light: #f5f5f5;
  --client-background-gray: #f9fafa;
}
```

4. **Add brand class** to `src/styles/components/project-hero.css`:

```css
.client {
  --projecthero-background-color: var(--client-primary);
}
```

That's it! The case study will automatically appear in:
- Home page grid
- Work dropdown menu
- Individual case study page at `/work/project-slug`

### Add a New Exploration Project

1. **Add data** to `src/data/explorations.js`:

```javascript
{
  id: "project-id",
  title: "Project Title",
  slug: "project-slug",
  description: "Brief description...",
  tags: ["React", "Tailwind", "etc"],
  githubUrl: "https://github.com/username/repo",
  liveUrl: "https://project.vercel.app",
  objective: "What you wanted to accomplish...",
  details: ["Key feature 1", "Key feature 2"],
  learnings: ["Learning 1", "Learning 2"]
}
```

That's it! The project will automatically appear in:
- Explorations page grid
- Explorations dropdown menu
- Individual project page at `/explorations/project-slug`

## Using Components

### Basic Card Layout

```jsx
import { Card } from './Components/ui';

<Card>
  <Card.Header>
    <Card.Title>Title</Card.Title>
    <Card.Description>Description</Card.Description>
  </Card.Header>
  <Card.Content>
    Your content here
  </Card.Content>
  <Card.Footer>
    Footer content
  </Card.Footer>
</Card>
```

### Button Variants

```jsx
import { Button } from './Components/ui';

<Button variant="default">Default</Button>
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
```

### Badge for Tags

```jsx
import { Badge } from './Components/ui';

<Badge variant="primary">UX Research</Badge>
<Badge variant="secondary">Design</Badge>
```

### Dropdown Menu

```jsx
import { Dropdown } from './Components/ui';

<Dropdown
  trigger={
    <Dropdown.Trigger>Menu</Dropdown.Trigger>
  }
>
  <Dropdown.Item href="/page1">Page 1</Dropdown.Item>
  <Dropdown.Item href="/page2">Page 2</Dropdown.Item>
  <Dropdown.Separator />
  <Dropdown.Item onClick={handleAction}>Action</Dropdown.Item>
</Dropdown>
```

### Page Layout

```jsx
import { Container, Section } from './Components/ui';

<Section className="bg-gray-50">
  <Container maxWidth="7xl">
    <h1>Page Title</h1>
    <p>Content</p>
  </Container>
</Section>
```

## Common Customizations

### Change Card Hover Effect

In component:
```jsx
<Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
```

### Add New Badge Variant

In `src/Components/ui/Badge.js`:
```javascript
const badgeVariants = {
  // ... existing variants
  success: "bg-green-100 text-green-800",
  warning: "bg-yellow-100 text-yellow-800",
};
```

### Add New Button Size

In `src/Components/ui/Button.js`:
```javascript
const buttonSizes = {
  // ... existing sizes
  xs: "px-2 py-1 text-xs",
  xl: "px-8 py-4 text-xl"
};
```

### Custom Brand Color

Use Tailwind's color system in className:
```jsx
<div className="bg-blue-500 text-white">
  Custom colored content
</div>
```

## Development Commands

```bash
# Start development server
npm start

# Build for production
npm run build

# Build CSS only
npm run build:css

# Run tests
npm test
```

## File Locations

| What | Where |
|------|-------|
| UI Components | `src/Components/ui/` |
| Feature Components | `src/Components/` |
| Pages | `src/Pages/` |
| Case Study Data | `src/data/caseStudies.js` |
| Exploration Data | `src/data/explorations.js` |
| Brand Colors | `src/styles/base/brands.css` |
| Component Styles | `src/styles/components/` |
| Images - Logos | `src/images/logos/` |
| Images - Cards | `src/images/projectcards/` |
| Images - Assets | `src/images/projectassets/` |

## Tips

### Creating Consistent Cards

Always use the same structure:
1. Image/Visual first
2. Header with title and metadata
3. Tags/Badges
4. Description
5. Footer with actions

### Brand Theming

Apply brand class to main container:
```jsx
<div className="main kaplan">  // Purple
<div className="main aarp">    // Red
<div className="main modus">   // Blue
```

### Responsive Design

Use Tailwind's responsive prefixes:
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

### Accessibility

Always include:
- Alt text for images
- ARIA labels for icon buttons
- Keyboard navigation support
- Focus states

### Performance

- Keep components pure
- Use React.memo() for expensive components
- Lazy load images
- Minimize re-renders

## Troubleshooting

### Component Not Found

Make sure you're importing from the index:
```jsx
// ✅ Correct
import { Button } from './Components/ui';

// ❌ Wrong
import Button from './Components/ui/Button';
```

### Styles Not Applying

1. Check if Tailwind classes are correct
2. Run `npm run build:css` to rebuild CSS
3. Check if brand class is applied to parent
4. Clear browser cache

### Images Not Loading

1. Check file path and extension
2. Make sure image exists in correct folder
3. Check that filename matches exactly (case-sensitive)

### Dropdown Not Working

1. Make sure you're using Dropdown.Trigger as trigger
2. Check that Dropdown.Item has href or onClick
3. Verify there are no conflicting z-index styles

## Next Steps

1. Add more case studies
2. Add more exploration projects
3. Populate with real content and images
4. Add About page
5. Add Contact page
6. Deploy to production

---

For more details, see:
- [COMPONENT_LIBRARY.md](./COMPONENT_LIBRARY.md) - Full component documentation
- [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md) - Architecture overview
