"use client";

import { PostMeta } from "@/lib/blog";
import Link from "next/link";
import { Chip, Stack, Typography, Box, Divider } from "@mui/material";
import { ArticleRounded } from "@mui/icons-material";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";

function PostCard({ post }: { post: PostMeta }) {
  const router = useRouter();
  return (
    <Box sx={{ paddingBottom: 2 }}>
      <Stack direction="column" spacing={0.5}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
            <Typography variant="body1" sx={{ fontWeight: 500 }}>
              {post.title}
            </Typography>
          </Link>
          <Typography variant="body2" color="text.secondary">
            {post.date}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={0.5} flexWrap="wrap">
          {post.tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              variant="outlined"
              clickable
              onClick={() => router.push(`/blog?tag=${encodeURIComponent(tag)}`)}
            />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}

function BlogList({ posts, tags }: { posts: PostMeta[]; tags: string[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeTag = searchParams.get("tag");
  const filtered = activeTag ? posts.filter((p) => p.tags.includes(activeTag)) : posts;

  return (
    <Stack direction="column" spacing={2} sx={{ width: "100%", maxWidth: 600 }}>
      <Stack direction="row" spacing={1} alignItems="center">
        <ArticleRounded sx={{ color: "grey" }} />
        <Typography variant="h5">Blog</Typography>
      </Stack>
      <Typography variant="body2">
        Tech notes &amp; miscellaneous thoughts. For personal/daily-life posts, see my{" "}
        <a href="https://oyasai-oishiina.hateblo.jp/" style={{ color: "inherit" }}>
          Hatena blog
        </a>{" "}
        (Japanese).
      </Typography>

      <Stack direction="row" spacing={0.5} flexWrap="wrap">
        <Chip
          label="All"
          size="small"
          variant={activeTag ? "outlined" : "filled"}
          clickable
          onClick={() => router.push("/blog")}
        />
        {tags.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            size="small"
            variant={activeTag === tag ? "filled" : "outlined"}
            clickable
            onClick={() => router.push(`/blog?tag=${encodeURIComponent(tag)}`)}
          />
        ))}
      </Stack>

      <Divider />

      {filtered.length === 0 ? (
        <Typography variant="body2" color="text.secondary">
          No posts found.
        </Typography>
      ) : (
        filtered.map((post) => <PostCard key={post.slug} post={post} />)
      )}
    </Stack>
  );
}

export default function BlogClient({
  posts,
  tags,
}: {
  posts: PostMeta[];
  tags: string[];
}) {
  return (
    <Suspense fallback={null}>
      <BlogList posts={posts} tags={tags} />
    </Suspense>
  );
}
