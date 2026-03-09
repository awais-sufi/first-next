"use client";

import { useState } from "react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Image from "next/image";

const categories = ["All", "Tutorials", "News", "Updates", "Tips"];

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React 19: A Complete Guide",
    excerpt:
      "Learn everything you need to know about React 19's new features including Actions, use() hook, and improved server components.",
    category: "Tutorials",
    author: "Sarah Johnson",
    date: "March 8, 2026",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "Starter v3.0: What's New and How to Upgrade",
    excerpt:
      "Introducing 20+ new components, dark mode support, and improved performance. Here's everything you need to know.",
    category: "Updates",
    author: "Michael Chen",
    date: "March 5, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    featured: false,
  },
  {
    id: 3,
    title: "Building Accessible Web Applications: Best Practices",
    excerpt:
      "A comprehensive guide to making your React applications accessible to everyone, including screen reader support and keyboard navigation.",
    category: "Tutorials",
    author: "Emily Rodriguez",
    date: "March 2, 2026",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=400&fit=crop",
    featured: false,
  },
  {
    id: 4,
    title: "Introducing Our New Enterprise Plan",
    excerpt:
      "We're excited to announce our new Enterprise plan with dedicated support, custom integrations, and white-label licensing.",
    category: "News",
    author: "David Kim",
    date: "February 28, 2026",
    readTime: "3 min read",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    featured: false,
  },
  {
    id: 5,
    title: "10 Tips for Optimizing Your React App Performance",
    excerpt:
      "Practical tips and techniques to make your React applications faster and more efficient, from code splitting to memoization.",
    category: "Tips",
    author: "Sarah Johnson",
    date: "February 25, 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop",
    featured: false,
  },
  {
    id: 6,
    title: "The Future of Web Development: Trends to Watch in 2026",
    excerpt:
      "Explore the emerging trends in web development including AI-powered tools, edge computing, and the evolution of frameworks.",
    category: "News",
    author: "Michael Chen",
    date: "February 20, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=400&fit=crop",
    featured: false,
  },
];

export default function BlogContent() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-[#F7FAFC] py-20">
        <div className="w-[60%] mx-auto px-4">
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2d3748] mb-6">
              Blog
            </h1>
            <p className="text-xl text-[#718096] max-w-2xl mx-auto">
              Latest news, tutorials, and insights from our team.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Post */}
      {activeCategory === "All" && featuredPost && (
        <div className="py-12 px-4">
          <div className="w-[60%] mx-auto">
            <Card className="overflow-hidden" data-aos="zoom-in">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="h-64 md:h-auto relative">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <span className="inline-block bg-[#e6f6fe] text-[#03a9f4] text-sm font-medium px-3 py-1 rounded-full mb-4">
                    {featuredPost.category}
                  </span>
                  <h2 className="text-2xl font-bold text-[#2d3748] mb-3">
                    {featuredPost.title}
                  </h2>
                  <p className="text-[#718096] mb-4">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-[#718096] mb-6">
                    <span>{featuredPost.author}</span>
                    <span>•</span>
                    <span>{featuredPost.date}</span>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Link
                    href={`/blog/${featuredPost.id}`}
                    className="text-[#03a9f4] font-medium hover:text-[#03a9f4]/80 transition-colors"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      )}

      {/* Category Filter */}
      <div className="py-8 px-4">
        <div className="w-[60%] mx-auto">
          <div
            className="flex flex-wrap gap-2 justify-center"
            data-aos="fade-up"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-[#03a9f4] text-white"
                    : "bg-[#F7FAFC] text-[#718096] hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="py-8 px-4 pb-20">
        <div className="w-[60%] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <Card
                key={post.id}
                className="overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="h-48 overflow-hidden relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-[#e6f6fe] text-[#03a9f4] text-xs font-medium px-2 py-1 rounded-full mb-3">
                    {post.category}
                  </span>
                  <h3 className="font-bold text-[#2d3748] mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#718096] mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-[#718096]">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[#718096]">No posts found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
