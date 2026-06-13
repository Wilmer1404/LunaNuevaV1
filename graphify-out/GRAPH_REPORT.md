# Graph Report - .  (2026-06-12)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 97 nodes · 101 edges · 12 communities (11 shown, 1 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `7e461f39`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]

## God Nodes (most connected - your core abstractions)
1. `cn()` - 9 edges
2. `scripts` - 5 edges
3. `NavigationMenuTrigger()` - 3 edges
4. `App()` - 2 edges
5. `NavigationMenu()` - 2 edges
6. `NavigationMenuList()` - 2 edges
7. `NavigationMenuItem()` - 2 edges
8. `navigationMenuTriggerStyle` - 2 edges
9. `NavigationMenuContent()` - 2 edges
10. `NavigationMenuViewport()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `NavigationMenu()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/navigation-menu.tsx → src/lib/utils.ts
- `NavigationMenuList()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/navigation-menu.tsx → src/lib/utils.ts
- `NavigationMenuItem()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/navigation-menu.tsx → src/lib/utils.ts
- `NavigationMenuContent()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/navigation-menu.tsx → src/lib/utils.ts
- `NavigationMenuViewport()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/navigation-menu.tsx → src/lib/utils.ts

## Import Cycles
- None detected.

## Communities (12 total, 1 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.14
Nodes (5): NAV_LINKS, NavbarProps, ROOMS, App(), PT

### Community 1 - "Community 1"
Cohesion: 0.17
Nodes (12): dependencies, class-variance-authority, clsx, framer-motion, gsap, lucide-react, @radix-ui/react-navigation-menu, react (+4 more)

### Community 2 - "Community 2"
Cohesion: 0.17
Nodes (12): devDependencies, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, tailwindcss, @tailwindcss/vite (+4 more)

### Community 3 - "Community 3"
Cohesion: 0.35
Nodes (9): cn(), NavigationMenu(), NavigationMenuContent(), NavigationMenuItem(), NavigationMenuLink(), NavigationMenuList(), NavigationMenuTrigger(), navigationMenuTriggerStyle (+1 more)

### Community 4 - "Community 4"
Cohesion: 0.18
Nodes (5): ANIMATIONS, FeatureMetric, PRODUCT_DATA, ProductData, ProductId

### Community 5 - "Community 5"
Cohesion: 0.20
Nodes (3): HORARIO, NAV_COL, SOCIAL_LINKS

### Community 6 - "Community 6"
Cohesion: 0.20
Nodes (9): name, private, scripts, build, dev, lint, preview, type (+1 more)

### Community 7 - "Community 7"
Cohesion: 0.25
Nodes (5): AMENITIES, EXPERIENCES, fadeUp, InicioProps, stagger

## Knowledge Gaps
- **49 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+44 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `Community 1` to `Community 6`?**
  _High betweenness centrality (0.065) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Community 2` to `Community 6`?**
  _High betweenness centrality (0.065) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _49 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._