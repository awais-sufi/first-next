"use client";

import { useState } from "react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const categories = [
  {
    title: "Getting Started",
    items: [
      { href: "/docs", label: "Introduction", active: true },
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

const codeExamples = [
  {
    title: "Installation",
    code: `npm install starter-ui
# or
yarn add starter-ui`,
    language: "bash",
  },
  {
    title: "Basic Usage",
    code: `import { Button, Card } from 'starter-ui';

function MyPage() {
  return (
    <Card>
      <Button>Click me</Button>
    </Card>
  );
}`,
    language: "javascript",
  },
];

export default function DocsContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyToClipboard = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="bg-white">
      <div className="w-[60%] mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-4xl font-bold text-[#2d3748] mb-4">
            Documentation
          </h1>
          <p className="text-xl text-[#718096] max-w-2xl mx-auto">
            Everything you need to know about getting started with Starter.
          </p>
        </div>

        {/* Search */}
        <div
          className="max-w-xl mx-auto mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:border-[#03a9f4] focus:ring-2 focus:ring-[#03a9f4]/20 outline-none transition-all"
            />
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

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
                          item.active
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
            {/* Getting Started Section */}
            <section className="mb-12" data-aos="fade-up">
              <h2 className="text-2xl font-bold text-[#2d3748] mb-4">
                Getting Started
              </h2>
              <p className="text-[#718096] mb-8">
                Welcome to Starter! This guide will help you get up and running
                in minutes.
              </p>

              {codeExamples.map((example, index) => (
                <Card key={index} className="mb-6" hover={false}>
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-semibold text-[#2d3748]">
                      {example.title}
                    </h3>
                    <button
                      onClick={() => copyToClipboard(example.code, index)}
                      className="text-sm text-[#03a9f4] hover:text-[#03a9f4]/80 transition-colors"
                    >
                      {copiedIndex === index ? "Copied!" : "Copy"}
                    </button>
                  </div>
                  <pre className="bg-[#F7FAFC] p-4 rounded-lg overflow-x-auto">
                    <code className="text-sm text-[#2d3748] font-mono">
                      {example.code}
                    </code>
                  </pre>
                </Card>
              ))}
            </section>

            {/* Features */}
            <section className="mb-12" data-aos="fade-up">
              <h2 className="text-2xl font-bold text-[#2d3748] mb-4">
                Key Features
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "50+ Production-ready components",
                  "Fully responsive out of the box",
                  "Accessible by default",
                  "TypeScript support",
                  "Dark mode ready",
                  "Regular updates",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3"
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                  >
                    <svg
                      className="w-5 h-5 text-[#03a9f4] flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-[#718096]">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Next Steps */}
            <section data-aos="fade-up">
              <h2 className="text-2xl font-bold text-[#2d3748] mb-4">
                Next Steps
              </h2>
              <Card data-aos="zoom-in">
                <p className="text-[#718096] mb-4">
                  Ready to dive deeper? Check out our detailed guides on
                  components, theming, and advanced customization.
                </p>
                <div className="flex gap-4">
                  <Link href="/pricing">
                    <Button>View Pricing</Button>
                  </Link>
                  <Link href="/features">
                    <Button variant="secondary">Explore Features</Button>
                  </Link>
                </div>
              </Card>
            </section>
          </div>
        </div>

        {/* Navigation */}
        <div
          className="flex justify-between mt-12 pt-8 border-t"
          data-aos="fade-up"
        >
          <div></div>
          <Link href="/docs/installation">
            <Button>Next: Installation →</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
