import { BlogPosts } from "app/blog/components/posts";

export const metadata = {
  title: "Tetsuo AI Blog",
  description:
    "Read our blog posts to stay updated with the latest developer activity at Tetsuo AI.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Tetsuo AI Blog
      </h1>
      <BlogPosts />
    </section>
  );
}
