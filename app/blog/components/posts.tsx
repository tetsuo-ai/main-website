import { Link } from "next-view-transitions";
import { getBlogPosts } from "app/blog/utils";

export function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <div className="space-y-8">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="group block"
            href={`/blog/${post.slug}`}
          >
            <article className="relative rounded-lg bg-black/20 backdrop-blur-sm p-6 transition-all duration-300 hover:bg-black/30">
              <div className="flex items-center gap-4 mb-3">
                <div className="text-red-500 text-sm font-medium">
                  Dev Log #{post.slug}
                </div>
                <div className="text-neutral-400 text-sm">
                  {post.metadata.author || "Tetsuo AI Team"}
                </div>
              </div>
              <h2 className="text-xl font-medium text-neutral-200 mb-4">
                {post.metadata.title}
              </h2>
              <p className="text-neutral-400 leading-relaxed">
                {post.metadata.summary}
              </p>
              <div className="absolute inset-0 border border-white/10 rounded-lg pointer-events-none" />
            </article>
          </Link>
        ))}
    </div>
  );
}
