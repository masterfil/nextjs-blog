import type { MDXComponents } from "mdx/types";
// The mdx-components.tsx file is required to use @next/mdx with App Router and will not work without it.

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

// Global styles and components
// Adding styles and components in mdx-components.tsx will affect all MDX files in your application.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: (props) => <h1 style={{ color: "red" }} {...props} />,
    // Allows adding new components for use in MDX files.
    // MyComponent: (props) => <div {...props}>Hello, world!</div>,

    ...components,
  };
}
