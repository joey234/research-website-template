import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getBlogPost } from "@/utils/blog";
import ReactMarkdown from "react-markdown";

type BlogPageProps = {
  params: { slug: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}

export default function BlogPost({ params }: BlogPageProps) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      <div className="max-w-screen-lg mx-auto px-8 py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors duration-300 mb-12"
        >
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>

        <article className="prose prose-zinc max-w-none">
          {post.imageUrl && (
            <div className="relative w-full h-64 mb-8 overflow-hidden rounded-lg">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <div className="flex items-center gap-2 mb-4">
            <p className="text-sm text-zinc-500">{post.date}</p>
            {post.tags && post.tags.map((tag, index) => (
              <span
                key={index}
                className="text-sm px-2 py-1 bg-zinc-100 text-zinc-600 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-serif text-3xl mb-8">{post.title}</h1>
          
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
      </div>
    </div>
  );
} 