"use client";

import { useState } from "react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for learning and small projects",
    features: [
      "10 landing page templates",
      "Basic components (20+)",
      "Community support",
      "GitHub repository access",
      "Basic documentation",
    ],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    description: "For professional developers and small teams",
    features: [
      "All 50+ landing page templates",
      "Full component library (50+)",
      "Priority email support",
      "Advanced theming options",
      "Premium documentation",
      "Regular updates",
      "Source code included",
    ],
    cta: "Start Pro Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "per month",
    description: "For larger teams and custom needs",
    features: [
      "Everything in Pro",
      "Custom component development",
      "Dedicated support channel",
      "SLA guarantee",
      "On-premise deployment",
      "Team training sessions",
      "Custom integrations",
      "White-label licensing",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const comparisonFeatures = [
  { feature: "Landing page templates", free: "10", pro: "50+", enterprise: "Custom" },
  { feature: "Components", free: "20+", pro: "50+", enterprise: "Unlimited" },
  { feature: "Support", free: "Community", pro: "Priority Email", enterprise: "Dedicated" },
  { feature: "Source code", free: false, pro: true, enterprise: true },
  { feature: "Custom theming", free: false, pro: true, enterprise: true },
  { feature: "Regular updates", free: false, pro: true, enterprise: true },
  { feature: "SLA guarantee", free: false, pro: false, enterprise: true },
  { feature: "White-label", free: false, pro: false, enterprise: true },
];

const faqs = [
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period.",
  },
  {
    question: "Is there a free trial for the Pro plan?",
    answer: "Yes! We offer a 14-day free trial for the Pro plan. No credit card required to start.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and wire transfers for Enterprise plans.",
  },
  {
    question: "Can I upgrade or downgrade later?",
    answer: "Absolutely! You can change your plan at any time. We will prorate the difference.",
  },
  {
    question: "Do you offer student discounts?",
    answer: "Yes, we offer 50% off for students and educators with a valid .edu email address.",
  },
  {
    question: "What happens after the free trial ends?",
    answer: "After your trial, you can choose to upgrade to Pro or continue with our free tier.",
  },
];

export default function PricingContent() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-[#F7FAFC] py-20">
        <div className="w-[60%] mx-auto px-4">
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2d3748] mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-[#718096] max-w-2xl mx-auto">
              Choose the plan that fits your needs. All plans include our core features 
              with no hidden fees.
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="py-20 px-4">
        <div className="w-[60%] mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={plan.name}
                className={`relative ${
                  plan.popular ? "border-2 border-[#03a9f4]" : ""
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-[#03a9f4] text-white text-xs font-medium px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold text-[#2d3748] mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-[#2d3748]">{plan.price}</span>
                    {plan.price !== "Custom" && (
                      <span className="text-[#718096]">/{plan.period}</span>
                    )}
                  </div>
                  <p className="text-sm text-[#718096] mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-[#718096]">
                      <svg
                        className="w-5 h-5 text-[#03a9f4] flex-shrink-0 mt-0.5"
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
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full"
                  variant={plan.popular ? "primary" : "secondary"}
                >
                  {plan.cta}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="bg-[#F7FAFC] py-20 px-4">
        <div className="w-[60%] mx-auto">
          <SectionHeading
            title="Compare Plans"
            subtitle="See what is included in each plan"
          />

          <Card hover={false} data-aos="fade-up">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 px-4 font-semibold text-[#2d3748]">Feature</th>
                    <th className="text-center py-4 px-4 font-semibold text-[#2d3748]">Free</th>
                    <th className="text-center py-4 px-4 font-semibold text-[#2d3748]">Pro</th>
                    <th className="text-center py-4 px-4 font-semibold text-[#2d3748]">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((row, index) => (
                    <tr key={index} className="border-b last:border-0">
                      <td className="py-4 px-4 text-[#718096]">{row.feature}</td>
                      <td className="py-4 px-4 text-center">
                        {typeof row.free === "boolean" ? (
                          row.free ? (
                            <svg className="w-5 h-5 text-[#03a9f4] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          )
                        ) : (
                          <span className="text-[#718096]">{row.free}</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {typeof row.pro === "boolean" ? (
                          row.pro ? (
                            <svg className="w-5 h-5 text-[#03a9f4] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          )
                        ) : (
                          <span className="text-[#718096]">{row.pro}</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {typeof row.enterprise === "boolean" ? (
                          row.enterprise ? (
                            <svg className="w-5 h-5 text-[#03a9f4] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          )
                        ) : (
                          <span className="text-[#718096]">{row.enterprise}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-20 px-4">
        <div className="w-[60%] mx-auto max-w-3xl">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Got questions? We have got answers."
          />

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card 
                key={index} 
                className="cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={index * 50}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-[#2d3748]">{faq.question}</h3>
                  <svg
                    className={`w-5 h-5 text-[#718096] transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                {openFaq === index && (
                  <p className="text-[#718096] mt-4">{faq.answer}</p>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#e6f6fe] py-16 px-4">
        <div className="w-[60%] mx-auto text-center" data-aos="zoom-in">
          <h2 className="text-3xl font-bold text-[#2d3748] mb-4">
            Still Have Questions?
          </h2>
          <p className="text-[#718096] mb-8 max-w-2xl mx-auto">
            Cannot find the answer you are looking for? Reach out to our support team.
          </p>
          <Link href="/contact">
            <Button>Contact Us</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
