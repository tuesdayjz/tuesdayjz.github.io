import { getAllPosts, getAllTags, PostMeta } from "@/lib/blog";
import { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog | tuesdayjz",
  description: "tuesdayjz's blog",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();
  return <BlogClient posts={posts} tags={tags} />;
}
