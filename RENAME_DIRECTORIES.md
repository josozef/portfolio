# Directory Rename Instructions

All code has been updated to use lowercase directory names. You need to rename these directories:

## Directories to Rename

```bash
# In the src/ directory:
mv Components components
mv Data data
mv Pages pages
```

Or manually in your file explorer:
1. Rename `src/Components` → `src/components`
2. Rename `src/Data` → `src/data`
3. Rename `src/Pages` → `src/pages`

## After Renaming

Once you've renamed the directories:

1. **Stop the dev server** (Ctrl+C in terminal or kill the process)
2. **Delete node_modules/.cache** (optional but recommended):
   ```bash
   rm -rf node_modules/.cache
   ```
3. **Restart the dev server**:
   ```bash
   npm start
   ```

The site should then compile successfully and you'll see all the new changes including:
- Modern component library (buttons, cards, badges, dropdowns)
- Case study cards on the home page
- Work dropdown menu with all case studies
- Explorations section with new navigation

## Verification

After restarting, you should see:
- ✅ Compiled successfully (no errors)
- ✅ Home page with 3 case study cards in a grid
- ✅ Dropdown menus in the header for Work and Explorations
- ✅ Modern shadcn/ui inspired design

## All Code is Already Updated

All import statements have been changed to lowercase:
- ✅ `../components/Header` (was `../Components/Header`)
- ✅ `../data/caseStudies` (was `../Data/caseStudies`)
- ✅ `./pages/Home` (was `./Pages/Home`)

You just need to rename the actual folders to match!
