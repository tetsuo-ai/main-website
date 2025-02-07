import { BlogPosts } from "app/blog/components/posts";

export const metadata = {
  title: "Tetsuo AI",
  description:
    "Read our blog posts to stay updated with the latest developer activity at Tetsuo AI.",
};

export default function Page() {
  return (
    <section>
      <BlogPosts />
    </section>
  );
}
