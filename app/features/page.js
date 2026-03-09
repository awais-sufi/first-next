import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Features | Starter",
  description:
    "Discover all the powerful features that make Starter the best choice for React developers.",
};

const features = [
  {
    title: "50+ Ready Components",
    description:
      "Production-ready components including buttons, forms, navigation, and more. Everything you need to build a modern landing page.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
        />
      </svg>
    ),
  },
  {
    title: "Fully Responsive",
    description:
      "Every component is designed to work perfectly on all screen sizes, from mobile to desktop and everything in between.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "TypeScript Support",
    description:
      "Built with TypeScript from the ground up, providing full type safety and excellent IDE support for a better developer experience.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    title: "Accessible by Default",
    description:
      "WCAG compliant components with proper ARIA attributes, keyboard navigation, and screen reader support built-in.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
  },
  {
    title: "Dark Mode Ready",
    description:
      "Easy dark mode implementation with CSS variables. Switch between light and dark themes with a single prop.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    ),
  },
  {
    title: "Regular Updates",
    description:
      "We continuously improve our components with new features, bug fixes, and performance optimizations.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Install the Package",
    description: "Add Starter to your project with a single npm command.",
    code: "npm install starter-ui",
  },
  {
    step: 2,
    title: "Import Components",
    description: "Import any component you need from the library.",
    code: "import { Button, Card } from 'starter-ui';",
  },
  {
    step: 3,
    title: "Build Your UI",
    description: "Combine components to create beautiful interfaces.",
    code: "<Card><Button>Click me</Button></Card>",
  },
];

const comparison = [
  {
    title: "Without Starter",
    items: [
      "Build components from scratch",
      "Hours of styling and theming",
      "Manual responsive testing",
      "No TypeScript support",
      "Start from zero",
    ],
    className: "border-red-200",
  },
  {
    title: "With Starter",
    items: [
      "50+ ready-to-use components",
      "Beautiful default styles",
      "Fully responsive out of the box",
      "Full TypeScript support",
      "Ship in minutes",
    ],
    className: "border-[#03a9f4]",
  },
];

export default function FeaturesPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-[#F7FAFC] py-20">
        <div className="w-[60%] mx-auto px-4">
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2d3748] mb-6">
              Powerful Features
            </h1>
            <p className="text-xl text-[#718096] max-w-2xl mx-auto">
              Everything you need to build stunning landing pages faster than
              ever.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-20 px-4">
        <div className="w-[60%] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-[#03a9f4] mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-[#2d3748] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#718096]">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-[#F7FAFC] py-20 px-4">
        <div className="w-[60%] mx-auto">
          <SectionHeading
            title="How It Works"
            subtitle="Get started in minutes with three simple steps"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((item, index) => (
              <div
                key={item.step}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Card>
                  <div className="w-10 h-10 bg-[#03a9f4] text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-[#2d3748] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#718096] mb-4">{item.description}</p>
                  <pre className="bg-[#2d3748] text-white p-3 rounded-lg text-sm overflow-x-auto">
                    <code>{item.code}</code>
                  </pre>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comparison */}
      <div className="py-20 px-4">
        <div className="w-[60%] mx-auto">
          <SectionHeading
            title="Why Choose Starter?"
            subtitle="See the difference Starter makes"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {comparison.map((item, index) => (
              <Card
                key={item.title}
                className={`border-2 ${item.className}`}
                data-aos={index === 0 ? "fade-right" : "fade-left"}
              >
                <h3 className="text-xl font-bold text-[#2d3748] mb-6">
                  {item.title}
                </h3>
                <ul className="space-y-4">
                  {item.items.map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          index === 1 ? "text-[#03a9f4]" : "text-red-400"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {index === 1 ? (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        ) : (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        )}
                      </svg>
                      <span className="text-[#718096]">{text}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-[#e6f6fe] py-16 px-4">
        <div className="w-[60%] mx-auto">
          <div
            className="grid md:grid-cols-4 gap-8 text-center"
            data-aos="flip-up"
          >
            <div>
              <p className="text-4xl font-bold text-[#03a9f4]">50+</p>
              <p className="text-[#718096]">Components</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#03a9f4]">10K+</p>
              <p className="text-[#718096]">Downloads</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#03a9f4]">500+</p>
              <p className="text-[#718096]">GitHub Stars</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#03a9f4]">50+</p>
              <p className="text-[#718096]">Contributors</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 px-4">
        <div className="w-[60%] mx-auto text-center" data-aos="zoom-in">
          <h2 className="text-3xl font-bold text-[#2d3748] mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-[#718096] mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are already building amazing
            products with Starter.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/docs">
              <Button>Read the Docs</Button>
            </Link>
            <Link href="/pricing">
              <Button variant="secondary">View Pricing</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
