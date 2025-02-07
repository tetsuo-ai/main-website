import { notFound } from "next/navigation";
import { CustomMDX } from "app/blog/components/mdx";
import { formatDate, getBlogPosts } from "app/blog/utils";
import { baseUrl } from "app/sitemap";
import { Link } from "next-view-transitions";

export async function generateStaticParams() {
  let posts = await getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}) {
  const { slug } = await Promise.resolve(params);

  const posts = await getBlogPosts();
  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    return null;
  }

  const { title, publishedAt, summary, image } = post.metadata;
  const ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description: summary,
    openGraph: {
      title,
      description: summary,
      type: "article",
      publishedTime: publishedAt,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: summary,
      images: [ogImage],
    },
  };
}

export default async function Blog({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}) {
  // Await params so that you can safely access `slug`
  const { slug } = await Promise.resolve(params);

  const posts = await getBlogPosts();
  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="p-12">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "Tetsuo AI",
            },
          }),
        }}
      />

      <div className="my-4 flex items-center gap-4">
        <Link
          href="/blog"
          className="inline-flex items-center text-red-500 hover:text-red-400 transition-colors"
        >
          <span className="mr-2">◀</span>
        </Link>

        <h1 className="text-red-500 text-4xl mb-0">{post.metadata.title}</h1>
      </div>
      <div className="flex justify-between items-center mb-4 text-sm">
        <p className="text-gray-200">{formatDate(post.metadata.publishedAt)}</p>
      </div>
      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}
