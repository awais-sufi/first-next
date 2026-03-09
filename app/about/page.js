import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Image from "next/image";

export const metadata = {
  title: "About | Starter",
  description:
    "Learn about our mission to make React development accessible to everyone.",
};

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    bio: "Former React Core Team member with 10+ years of experience building developer tools.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    bio: "Full-stack developer and open source advocate. Built multiple successful SaaS products.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    name: "Emily Rodriguez",
    role: "Lead Designer",
    bio: "Award-winning UX designer passionate about creating intuitive developer experiences.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    name: "David Kim",
    role: "Head of Engineering",
    bio: "Infrastructure expert focused on scalable systems and developer productivity.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
];

const timeline = [
  {
    year: "2020",
    title: "The Beginning",
    description:
      "Started as a small side project to help developers build landing pages faster.",
  },
  {
    year: "2021",
    title: "First Major Release",
    description:
      "Launched v1.0 with 50+ components and comprehensive documentation.",
  },
  {
    year: "2022",
    title: "10,000+ Developers",
    description:
      "Reached milestone of 10,000 active users and 500 GitHub stars.",
  },
  {
    year: "2023",
    title: "Enterprise Customers",
    description:
      "Started serving enterprise customers with custom solutions and priority support.",
  },
  {
    year: "2024",
    title: "Community Growth",
    description: "50+ contributors and 100,000+ downloads worldwide.",
  },
];

const values = [
  {
    title: "Developer First",
    description:
      "Every decision we make is based on how it helps developers build better products faster.",
    icon: "⚡",
  },
  {
    title: "Open Source",
    description:
      "We believe in giving back to the community. Our core libraries are open source.",
    icon: "🌍",
  },
  {
    title: "Continuous Innovation",
    description:
      "We're constantly improving our tools and adding new features based on user feedback.",
    icon: "🚀",
  },
  {
    title: "Quality & Reliability",
    description:
      "Every component is tested, documented, and maintained to the highest standards.",
    icon: "✓",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-[#F7FAFC] py-20">
        <div className="w-[60%] mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2d3748] mb-6">
              Our Mission
            </h1>
            <p className="text-xl text-[#718096] mb-8">
              We are on a mission to make React development accessible,
              enjoyable, and productive for developers of all skill levels.
            </p>
            <p className="text-lg text-[#718096]">
              We believe that great user experiences should not require
              extraordinary effort. By providing beautifully designed,
              production-ready components, we help developers focus on what
              matters most — building amazing products.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 px-4">
        <div className="w-[60%] mx-auto">
          <SectionHeading
            title="Meet Our Team"
            subtitle="The passionate people behind Starter who work every day to make your development journey easier."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={member.name}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    width={100}
                    height={100}
                  />
                </div>
                <h3 className="font-semibold text-lg text-[#2d3748]">
                  {member.name}
                </h3>
                <p className="text-[#03a9f4] text-sm mb-2">{member.role}</p>
                <p className="text-[#718096] text-sm">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="bg-[#F7FAFC] py-20 px-4">
        <div className="w-[60%] mx-auto">
          <SectionHeading
            title="Our Journey"
            subtitle="From a small side project to a community of 100,000+ developers."
          />

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className="flex gap-8 mb-8"
                data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
              >
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-[#03a9f4] font-bold text-lg">
                    {item.year}
                  </span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 rounded-full bg-[#03a9f4] mt-1.5 relative">
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 w-0.5 h-full bg-[#03a9f4]/30"></div>
                </div>
                <Card className="flex-grow" hover={false}>
                  <h3 className="font-semibold text-lg text-[#2d3748] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#718096]">{item.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 px-4">
        <div className="w-[60%] mx-auto">
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide everything we do."
          />

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card
                key={value.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-semibold text-lg text-[#2d3748] mb-2">
                  {value.title}
                </h3>
                <p className="text-[#718096]">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#e6f6fe] py-16 px-4">
        <div className="w-[60%] mx-auto text-center" data-aos="zoom-in">
          <h2 className="text-3xl font-bold text-[#2d3748] mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-[#718096] mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are already building amazing
            products with Starter.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/pricing">
              <Button>View Pricing</Button>
            </Link>
            <Link href="/contact">
              <Button variant="secondary">Contact Us</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
