import { Link } from "next-view-transitions";
import { getBlogPosts } from "app/blog/utils";

import BlogPostsClient from "./BlogPostsClient";

export async function BlogPosts() {
  const allBlogs = await getBlogPosts();
  const sortedBlogs = allBlogs.sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime(),
  );
  return <BlogPostsClient posts={sortedBlogs} />;
}
