// Re-export blog types and functions from utils
export type { BlogPost } from '@/utils/blog';
export { getAllBlogPosts, getBlogPost } from '@/utils/blog';

export interface BlogPost {
  title: string;
  date: string;
  description: string;
  content: string;
  slug: string;
  tags?: string[];
  imageUrl?: string;
}

export const blogData: BlogPost[] = [
  {
    title: "Sample Blog Post",
    date: "2024-03-20",
    description: "This is a sample blog post about my research in NLP and language models.",
    content: `
# My First Blog Post

Welcome to my blog! Here I'll share my thoughts about natural language processing, 
machine learning, and my research journey.

## Introduction

In this post, I want to discuss...

[Rest of your content goes here...]
    `,
    slug: "sample-blog-post",
    tags: ["NLP", "Research", "Machine Learning"],
    imageUrl: "/images/blog/sample-post.jpg" // Optional
  },
  // Add more blog posts here
]; 