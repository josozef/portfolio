# Component Library Documentation

A comprehensive, reusable component library inspired by shadcn/ui design principles. All components are built with React, Tailwind CSS, and follow modern best practices.

## Design Philosophy

- **Reusability**: Components are designed to be highly reusable across the application
- **Composition**: Components can be composed together to create complex UIs
- **Consistency**: Consistent API and design patterns across all components
- **Accessibility**: Built with accessibility in mind (keyboard navigation, ARIA attributes)
- **Customization**: Easy to customize with className props and variants

## UI Components

### Button

Versatile button component with multiple variants and sizes.

**Variants**: `default`, `primary`, `secondary`, `outline`, `ghost`, `link`
**Sizes**: `sm`, `md`, `lg`

```jsx
import { Button } from './Components/ui';

<Button variant="primary" size="md">Click me</Button>
<Button variant="outline">Secondary Action</Button>
```

### Badge

Small component for displaying tags, labels, and categories.

**Variants**: `default`, `primary`, `secondary`, `outline`

```jsx
import { Badge } from './Components/ui';

<Badge variant="primary">New</Badge>
<Badge variant="secondary">Designer</Badge>
```

### Card

Container component with composable sub-components.

**Sub-components**: `Card.Header`, `Card.Title`, `Card.Description`, `Card.Content`, `Card.Footer`

```jsx
import { Card } from './Components/ui';

<Card>
  <Card.Header>
    <Card.Title>Title</Card.Title>
    <Card.Description>Description</Card.Description>
  </Card.Header>
  <Card.Content>
    Content goes here
  </Card.Content>
  <Card.Footer>
    Footer content
  </Card.Footer>
</Card>
```

### Dropdown

Accessible dropdown menu with keyboard navigation.

**Sub-components**: `Dropdown.Trigger`, `Dropdown.Item`, `Dropdown.Separator`

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
  <Dropdown.Item onClick={handleClick}>Action</Dropdown.Item>
</Dropdown>
```

### Container

Responsive container for consistent page width and padding.

**Max Widths**: `sm`, `md`, `lg`, `xl`, `2xl`, `7xl`, `full`

```jsx
import { Container } from './Components/ui';

<Container maxWidth="7xl">
  Content
</Container>
```

### Section

Section component for consistent vertical spacing.

**Variants**: `default`, `compact`, `spacious`

```jsx
import { Section } from './Components/ui';

<Section variant="default">
  Section content
</Section>
```

## Feature Components

### CaseStudyCard

Card component specifically designed for displaying case studies on the home page.

```jsx
import CaseStudyCard from './Components/CaseStudyCard';
import { caseStudies } from './data/caseStudies';

{caseStudies.map((caseStudy) => (
  <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
))}
```

### ExplorationCard

Card component for displaying exploration/vibe-coding projects.

```jsx
import ExplorationCard from './Components/ExplorationCard';
import { explorations } from './data/explorations';

{explorations.map((exploration) => (
  <ExplorationCard key={exploration.id} exploration={exploration} />
))}
```

## Data Structure

### Case Studies

Located in `src/data/caseStudies.js`

```javascript
{
  id: "unique-id",
  name: "Case Study Name",
  slug: "case-study-slug",
  client: "Client Name",
  logo: "logo-filename",
  logoHeight: "40",
  brandTheme: "client", // CSS class for brand theming
  roles: ["Role 1", "Role 2"],
  year: "2021",
  summary: "Brief summary...",
  description: "Detailed description...",
  heroImage: "filename.jpg",
  challenge: "Challenge description...",
  solution: "Solution description...",
  impact: ["Impact item 1", "Impact item 2"]
}
```

### Explorations

Located in `src/data/explorations.js`

```javascript
{
  id: "unique-id",
  title: "Project Title",
  slug: "project-slug",
  description: "Brief description...",
  tags: ["React", "Tailwind"],
  thumbnail: null,
  githubUrl: "https://github.com/...",
  liveUrl: "https://...",
  objective: "Detailed objective...",
  details: ["Detail 1", "Detail 2"],
  learnings: ["Learning 1", "Learning 2"]
}
```

## Brand Theming

Brand-specific colors are defined in `src/styles/base/brands.css` using CSS custom properties.

**Available Themes**: `kaplan`, `aarp`, `modus`, `default`

Each theme has:
- `--{brand}-primary`: Primary brand color
- `--{brand}-primary-dark`: Darker shade
- `--{brand}-primary-light`: Lighter shade
- `--{brand}-background-gray`: Background color

To apply a brand theme, add the brand class to the main container:

```jsx
<div className="main kaplan">
  {/* Content will use Kaplan brand colors */}
</div>
```

## Best Practices

1. **Import UI components from the index**: 
   ```jsx
   import { Button, Card, Badge } from './Components/ui';
   ```

2. **Use the data structure for consistency**: Always use the data files for case studies and explorations

3. **Maintain component composition**: Use Card sub-components rather than creating monolithic cards

4. **Follow naming conventions**: 
   - UI components: PascalCase (Button, Card)
   - Feature components: PascalCase with descriptive names (CaseStudyCard)
   - Data files: camelCase (caseStudies.js)

5. **Keep components pure**: Avoid side effects in component logic

6. **Use TypeScript for better type safety** (future enhancement)

## Adding New Components

1. Create component file in `src/Components/ui/`
2. Export from `src/Components/ui/index.js`
3. Document in this file
4. Follow existing patterns for props and variants
5. Use classNames for conditional styling
6. Include prop documentation in JSDoc comments

## Future Enhancements

- [ ] Add TypeScript definitions
- [ ] Add Storybook for component documentation
- [ ] Add unit tests for all components
- [ ] Add animation/transition utilities
- [ ] Add form components (Input, Select, Checkbox, etc.)
- [ ] Add modal/dialog components
- [ ] Add toast/notification system
- [ ] Add dark mode support
