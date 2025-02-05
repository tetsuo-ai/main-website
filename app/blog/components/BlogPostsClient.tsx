"use client";

import React, { useState } from "react";
import { Link } from "next-view-transitions";

interface BlogPostMetadata {
  title?: string;
  publishedAt: string;
  summary: string;
  image?: string;
  author?: string;
}

interface BlogPost {
  slug: string;
  metadata: BlogPostMetadata;
  content: string;
}

interface BlogPostsClientProps {
  posts: BlogPost[];
}

export default function BlogPostsClient({ posts }: BlogPostsClientProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = posts.filter((post) => {
    const term = searchTerm.toLowerCase();
    const { metadata, slug } = post;
    return (
      (metadata.title && metadata.title.toLowerCase().includes(term)) ||
      metadata.summary.toLowerCase().includes(term) ||
      (metadata.author && metadata.author.toLowerCase().includes(term)) ||
      slug.toLowerCase().includes(term)
    );
  });

  return (
    <div>
      <input
        type="text"
        placeholder=""
        aria-label="Search posts"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
      />
      {filteredPosts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <div className="space-y-8">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              className="group block"
              href={`/blog/${post.slug}`}
            >
              <article className="relative rounded-lg bg-black/20 backdrop-blur-sm p-6 transition-all duration-300 hover:bg-black/30">
                <div className="flex items-center gap-4 mb-3">
                  <div className="text-red-500 text-sm font-medium">
                    {post.metadata.title || `Dev Log #${post.slug}`}
                  </div>
                  <div className="text-neutral-400 text-sm">
                    {post.metadata.author || "Tetsuo AI Team"}
                  </div>
                </div>
                <p className="text-neutral-400 leading-relaxed">
                  {post.metadata.summary}
                </p>
                <div className="absolute inset-0 border border-white/10 rounded-lg pointer-events-none" />
              </article>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
