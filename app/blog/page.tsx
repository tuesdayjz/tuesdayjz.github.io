import { getAllPosts, getAllTags, PostMeta } from "@/lib/blog";
import { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog",
  description: "Tech notes and miscellaneous thoughts by tuesdayjz.",
  openGraph: {
    type: "website",
    url: "/blog",
    title: "Blog | tuesdayjz",
    description: "Tech notes and miscellaneous thoughts by tuesdayjz.",
  },
  twitter: {
    title: "Blog | tuesdayjz",
    description: "Tech notes and miscellaneous thoughts by tuesdayjz.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();
  return <BlogClient posts={posts} tags={tags} />;
}
