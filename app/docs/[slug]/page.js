"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const docPages = {
  installation: {
    title: "Installation",
    content: `Getting Started with Installation

Installing Starter is simple. You can use npm, yarn, or pnpm to add it to your project.

## Using npm

\`\`\`bash
npm install starter-ui
\`\`\`

## Using yarn

\`\`\`bash
yarn add starter-ui
\`\`\`

## Using pnpm

\`\`\`bash
pnpm add starter-ui
\`\`\`

That's it! You're ready to start using Starter in your project.`,
    prev: { href: "/docs", label: "← Introduction" },
    next: { href: "/docs/quick-start", label: "Quick Start →" },
  },
  "quick-start": {
    title: "Quick Start",
    content: `Quick Start Guide

Get up and running with Starter in under 5 minutes.

## Step 1: Import Components

Import the components you need from starter-ui:

\`\`\`jsx
import { Button, Card, Input } from 'starter-ui';
\`\`\`

## Step 2: Use in Your App

Start building your UI:

\`\`\`jsx
function App() {
  return (
    <Card>
      <h1>Welcome</h1>
      <Button>Get Started</Button>
    </Card>
  );
}
\`\`\`

## Step 3: Customize

Customize components using props and theming.`,
    prev: { href: "/docs/installation", label: "← Installation" },
    next: { href: "/docs/components", label: "Components →" },
  },
  components: {
    title: "Components",
    content: `Components Overview

Starter includes 50+ production-ready components.

## Available Components

- **Buttons**: Button, IconButton, LinkButton
- **Forms**: Input, Select, Checkbox, Radio
- **Layout**: Card, Grid, Container, Flex
- **Navigation**: Navbar, Tabs, Breadcrumb
- **Display**: Badge, Avatar, Alert, Modal

Each component is fully documented with props and examples.`,
    prev: { href: "/docs/quick-start", label: "← Quick Start" },
    next: { href: "/docs/theming", label: "Theming →" },
  },
  theming: {
    title: "Theming",
    content: `Customize the Look and Feel

Starter supports full theming capabilities.

## Theme Configuration

\`\`\`javascript
// theme.js
export const theme = {
  colors: {
    primary: '#03a9f4',
    secondary: '#718096',
    background: '#F7FAFC',
  },
  fonts: {
    sans: 'Geist, sans-serif',
  },
};
\`\`\`

Apply your theme using the ThemeProvider.`,
    prev: { href: "/docs/components", label: "← Components" },
    next: { href: "/docs/styling", label: "Styling →" },
  },
  styling: {
    title: "Styling",
    content: `Styling Options

Starter supports multiple styling approaches.

## CSS-in-JS

Use inline styles or CSS-in-JS libraries:

\`\`\`jsx
<Card style={{ padding: '20px' }}>
  Content
</Card>
\`\`\`

## Tailwind CSS

All components work with Tailwind:

\`\`\`jsx
<Card className="p-4 bg-white rounded-lg">
  Content
</Card>
\`\`\``,
    prev: { href: "/docs/theming", label: "← Theming" },
    next: { href: "/docs/props", label: "Props & API →" },
  },
  props: {
    title: "Props & API",
    content: `Component Props & API

Each component accepts various props for customization.

## Common Props

- \`className\`: Additional CSS classes
- \`style\`: Inline styles
- \`onClick\`: Click handler
- \`disabled\`: Disabled state

## Component-Specific

Check individual component docs for specialized props.`,
    prev: { href: "/docs/styling", label: "← Styling" },
    next: { href: "/docs/customization", label: "Customization →" },
  },
  customization: {
    title: "Customization",
    content: `Advanced Customization

Take your projects to the next level.

## Extending Components

Create custom variants:

\`\`\`jsx
const MyButton = ({ variant, ...props }) => (
  <Button
    {...props}
    className={\`btn-\${variant} \${props.className}\`}
  />
);
\`\`\`

## Overriding Styles

Use CSS selectors to override default styles.`,
    prev: { href: "/docs/props", label: "← Props & API" },
    next: { href: "/docs/SSR", label: "SSR →" },
  },
  SSR: {
    title: "Server-Side Rendering",
    content: `Server-Side Rendering Support

Starter works seamlessly with SSR.

## Next.js

All components are SSR-compatible:

\`\`\`jsx
// This works!
export async function getStaticProps() {
  return {
    props: {
      // Your data
    },
  };
}
\`\`\`

No special configuration needed.`,
    prev: { href: "/docs/customization", label: "← Customization" },
    next: { href: "/docs/optimization", label: "Performance →" },
  },
  optimization: {
    title: "Performance",
    content: `Performance Optimization

Best practices for fast apps.

## Code Splitting

Import only what you need:

\`\`\`jsx
// Good: Tree-shakeable
import { Button } from 'starter-ui';

// Avoid: Imports everything
import * as UI from 'starter-ui';
\`\`\`

## Lazy Loading

Use dynamic imports for large components.`,
    prev: { href: "/docs/SSR", label: "← SSR" },
    next: { href: "/docs/deployment", label: "Deployment →" },
  },
  deployment: {
    title: "Deployment",
    content: `Deploy Your Project

Starter-ready deployment guides.

## Vercel

Deploy to Vercel with zero config:

\`\`\`bash
vercel
\`\`\`

## Netlify

Works out of the box with Netlify.

## Docker

Containerize your application:

\`\`\`dockerfile
FROM node:18
WORKDIR /app
COPY . .
RUN npm install && npm run build
CMD ["npm", "start"]
\`\`\``,
    prev: { href: "/docs/optimization", label: "← Performance" },
    next: null,
  },
};

const categories = [
  {
    title: "Getting Started",
    items: [
      { href: "/docs", label: "Introduction" },
      { href: "/docs/installation", label: "Installation" },
      { href: "/docs/quick-start", label: "Quick Start" },
    ],
  },
  {
    title: "Core Concepts",
    items: [
      { href: "/docs/components", label: "Components" },
      { href: "/docs/theming", label: "Theming" },
      { href: "/docs/styling", label: "Styling" },
      { href: "/docs/props", label: "Props & API" },
    ],
  },
  {
    title: "Advanced",
    items: [
      { href: "/docs/customization", label: "Customization" },
      { href: "/docs/SSR", label: "Server-Side Rendering" },
      { href: "/docs/optimization", label: "Performance" },
      { href: "/docs/deployment", label: "Deployment" },
    ],
  },
];

export default function DocSlugPage() {
  const params = useParams();
  const slug = params.slug;
  const doc = docPages[slug] || {
    title: "Page Not Found",
    content: "The requested documentation page does not exist.",
    prev: { href: "/docs", label: "← Back to Docs" },
    next: null,
  };

  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    const codeBlock = document.querySelector("pre code");
    if (codeBlock) {
      navigator.clipboard.writeText(codeBlock.textContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Simple rendering of markdown-like content
  const renderContent = (content) => {
    const lines = content.split("\n");
    return lines.map((line, index) => {
      if (line.startsWith("## ")) {
        return (
          <h2
            key={index}
            className="text-xl font-bold text-[#2d3748] mt-8 mb-4"
          >
            {line.replace("## ", "")}
          </h2>
        );
      }
      if (line.startsWith("### ")) {
        return (
          <h3
            key={index}
            className="text-lg font-semibold text-[#2d3748] mt-6 mb-3"
          >
            {line.replace("### ", "")}
          </h3>
        );
      }
      if (line.startsWith("```")) {
        return null;
      }
      if (line === "```") {
        return null;
      }
      if (line.trim().startsWith("- ")) {
        return (
          <li key={index} className="text-[#718096] ml-4">
            {line.replace("- ", "")}
          </li>
        );
      }
      if (line.match(/^\d+\. /)) {
        return (
          <li key={index} className="text-[#718096] ml-4">
            {line.replace(/^\d+\. /, "")}
          </li>
        );
      }
      if (line.match(/`[^`]+`/)) {
        const parts = line.split(/(`[^`]+`)/);
        return (
          <p key={index} className="text-[#718096] mb-2">
            {parts.map((part, i) =>
              part.match(/`[^`]+`/) ? (
                <code
                  key={i}
                  className="bg-[#F7FAFC] px-1 rounded text-[#03a9f4]"
                >
                  {part.replace(/`/g, "")}
                </code>
              ) : (
                part
              ),
            )}
          </p>
        );
      }
      if (line.trim() === "") {
        return <br key={index} />;
      }
      return (
        <p key={index} className="text-[#718096] mb-2">
          {line}
        </p>
      );
    });
  };

  return (
    <div className="bg-white">
      <div className="w-[60%] mx-auto px-4 py-12">
        {/* Content Grid */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1" data-aos="fade-right">
            {categories.map((category) => (
              <div key={category.title} className="mb-6">
                <h3 className="font-semibold text-[#2d3748] mb-3">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`text-sm transition-colors ${
                          `/docs/${slug}` === item.href
                            ? "text-[#03a9f4] font-medium"
                            : "text-[#718096] hover:text-[#03a9f4]"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div data-aos="fade-up">
              <h1 className="text-3xl font-bold text-[#2d3748] mb-8">
                {doc.title}
              </h1>

              <Card hover={false}>
                <div className="prose max-w-none">
                  {renderContent(doc.content)}
                </div>

                <div className="flex justify-between mt-8 pt-6 border-t">
                  {doc.prev ? (
                    <Link href={doc.prev.href}>
                      <Button variant="secondary">{doc.prev.label}</Button>
                    </Link>
                  ) : (
                    <div></div>
                  )}

                  {doc.next && (
                    <Link href={doc.next.href}>
                      <Button>{doc.next.label}</Button>
                    </Link>
                  )}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
