---
name: frontend-best-practices
description: Frontend coding conventions and component patterns. Use when writing or reviewing frontend code, building UI components, or refactoring.
---

# Key Conventions

### Do not create unnecessary HTML Elements

```tsx
<section className="flex flex-col gap-4">
  <h1 className="text-2xl font-bold">Title</h1>
  <p className="text-sm text-gray-500">Description</p>
</section>
```

Instead of:

```tsx
<section>
<div className="flex flex-col gap-4">
  <div className="flex flex-col gap-4">
    <h1 className="text-2xl font-bold">Title</h1>
    <p className="text-sm text-gray-500">Description</p>
  </div>
</div>
</section>
```

### Break Into Sub-Components, Colocate State

NEVER create monolithic components. Break them into smaller sub-components and **place state/hooks and utility functions as close as possible to where they're actually used**. The shape of the split depends on the component — there's no fixed layering rule. Just ask: "does this piece of state/logic belong here, or closer to where it's consumed?"

**Good:** Each sub-component owns only the state it needs.

```tsx
export function MilestoneEditor({ goalPublicId, milestonePublicId }: TMilestoneEditor) {
  // Only animation + Suspense — no data fetching or mutation logic here
  return (
    <Suspense>
      <motion.div animate={{ flex: 1 }} initial={{ flex: 0 }} exit={{ flex: 0 }}>
        <MilestoneEditorContent milestonePublicId={milestonePublicId} goalPublicId={goalPublicId} />
      </motion.div>
    </Suspense>
  );
}

function MilestoneEditorContent({ goalPublicId, milestonePublicId }: TMilestoneEditor) {
  // useQuery lives here because this component handles the loading state
  const { isLoading, data } = useQuery({ ... });
  if (!isReady) return <Spinner />;
  return <Editors content={data} ... />;
}

function Editors(props: { content: string; ... }) {
  // useMutation lives here because this component does the saving
  const saveMutation = useMutation({ ... });
  return <BlockNoteEditor ... />;
}
```

**Bad:** One giant component with useQuery + useMutation + useState + toolbar UI + editor rendering + loading ternaries all mixed together.

### Extract Small UI Pieces

- Loading spinners, empty states, etc. — their own const components
- Keeps the main component returns clean and readable

### Ref Patterns for Performance

- Use `useRef` for values that change frequently but shouldn't trigger re-renders (e.g. editor content)
- Use ref-based functions (`doSaveRef.current = async () => {...}`) so debounce timers always call the latest version without re-creating timeouts

### Namespace Component Exports

Reusable UI components are exported as namespaced objects, not individual components:

```tsx
// Usage
<Buttons.Click stylization={{ variant: "oliva", radius: "md" }}>Save</Buttons.Click>
<Inputs.Text placeholder="Name" />
<Inputs.Password placeholder="Password" />
```

Components live in `src/components/ui/{ComponentGroup}/index.tsx` and expose variants via a `stylization` prop that maps to `tv()`.

### Folder Structure

Every page keeps its own components inside a `_page-resources/` folder (the underscore prefix excludes it from Tanstack Start routing). Shared, reusable primitives live in `src/components/ui/`. This keeps page-specific logic isolated while avoiding duplication for truly generic components.

### Styling with Tailwind Variants

All reusable UI components use **Tailwind Variants** (`tv()`) to define typed, composable style variants instead of conditional class strings:

```tsx
const buttonStylization = tv({
  base: "rounded-lg font-medium transition-colors ...",
  variants: {
    color: {
      neutral: "bg-bunker-950 text-white ...",
      oliva: "bg-oliva-400 text-bunker-950 ...",
    },
  },
});
```

`tailwind-merge` is used alongside to prevent conflicting Tailwind classes when composing styles.

### Extract Conditional Branches Into Named Components

When a component renders entirely different UI based on a condition (e.g. empty state vs populated state), extract each branch into its own named component in the same file. This keeps the parent component a clean router between states.

```tsx
export function GoalStructure(props: TGoalStructure) {
  const states = useGoalStructure(props);

  if (states.items.length === 0) return <EmptyState states={states} />;

  return <PopulatedState states={states} props={props} />;
}

function EmptyState({ states }: { ... }) { /* ... */ }
function PopulatedState({ states, props }: { ... }) { /* ... */ }
```

**Bad:** One component with a large `if/else` or ternary wrapping two completely different render trees inline.

### For Complex Components

 1 - If a component has several states, and sub components, try to separate the states into a hook in another file. And try to put the sub components in another file.
 2 - Instead of placing handler functions directly in the component most on top of the tree, try to place them as close as possible to where they should be used.
