import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BlogPost } from "@/data/blog";

export function BlogEntry({ post }: { post: BlogPost }) {
  return (
    <div className="group">
      <Link href={`/blog/${post.slug}`} className="space-y-4">
        {post.imageUrl && (
          <div className="relative w-full h-48 overflow-hidden rounded-lg">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <p className="text-xs text-zinc-500">{post.date}</p>
            {post.tags && post.tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 bg-zinc-100 text-zinc-600 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="font-serif text-lg group-hover:text-zinc-600 transition-colors">
            {post.title}
          </h3>
          <p className="text-sm text-zinc-600">{post.description}</p>
          <div className="inline-flex items-center gap-2 text-xs text-zinc-500 group-hover:text-zinc-900 transition-colors duration-300">
            <span className="tracking-wider uppercase">Read More</span>
            <ArrowUpRight
              size={12}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
            />
          </div>
        </div>
      </Link>
    </div>
  );
} 