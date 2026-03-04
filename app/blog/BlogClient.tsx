"use client";

import { PostMeta } from "@/lib/blog";
import Link from "next/link";
import { Chip, Stack, Typography, Box } from "@mui/material";
import { colors } from "@/lib/colors";
import { siteConfig } from "@/lib/config";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";

function PostRow({ post }: { post: PostMeta }) {
  const router = useRouter();
  return (
    <Stack spacing={0.25} sx={{ py: 0.75, borderBottom: "1px solid #1a2a1a" }}>
      <Stack direction="row" spacing={1.5} alignItems="baseline" flexWrap="wrap" useFlexGap>
        <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
          <Typography variant="body1" sx={{ color: colors.primary, fontWeight: 600, "&:hover": { textDecoration: "underline" } }}>
            {post.title}
          </Typography>
        </Link>
        <Typography variant="body2" sx={{ color: colors.muted, whiteSpace: "nowrap" }}>{post.date}</Typography>
      </Stack>
      <Stack direction="row" spacing={0.75} flexWrap="wrap" useFlexGap>
        {post.tags.map((tag) => (
          <Chip key={tag} label={tag} size="small" variant="outlined" clickable
            onClick={() => router.push(`/blog?tag=${encodeURIComponent(tag)}`)} />
        ))}
      </Stack>
    </Stack>
  );
}

function BlogList({ posts, tags }: { posts: PostMeta[]; tags: string[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeTag = searchParams.get("tag");
  const filtered = activeTag ? posts.filter((p) => p.tags.includes(activeTag)) : posts;

  return (
    <Stack direction="column" spacing={1.5} sx={{ width: "100%", maxWidth: 720 }}>
      {/* tag filter */}
      <Stack direction="row" spacing={0.75} alignItems="center">
        <Typography variant="body2" sx={{ color: colors.chrome, userSelect: "none" }}>$</Typography>
        <Typography variant="body2" sx={{ color: colors.text }}>
          ls ~/blog/{activeTag ? `--tag=${activeTag}` : ""}
        </Typography>
      </Stack>

      {/* tag chips */}
      <Stack direction="row" spacing={0.5} flexWrap="wrap" useFlexGap sx={{ pl: 1.5 }}>
        <Chip label="all" size="small" variant={activeTag ? "outlined" : "filled"} clickable onClick={() => router.push("/blog")} />
        {tags.map((tag) => (
          <Chip key={tag} label={tag} size="small" variant={activeTag === tag ? "filled" : "outlined"} clickable
            onClick={() => router.push(`/blog?tag=${encodeURIComponent(tag)}`)} />
        ))}
      </Stack>

      {/* post list */}
      <Box sx={{ pl: 1.5, borderLeft: `2px solid ${colors.border}` }}>
        {filtered.length === 0 ? (
          <Typography variant="body2" sx={{ color: colors.chrome }}>no posts found.</Typography>
        ) : (
          filtered.map((post) => <PostRow key={post.slug} post={post} />)
        )}
      </Box>

      <Typography variant="body2" sx={{ color: colors.chrome, fontSize: "0.75rem" }}>
        # for personal/daily-life posts → <a href={siteConfig.socials.hatena} style={{ color: colors.muted }}>hatena blog</a> (ja)
      </Typography>
    </Stack>
  );
}

export default function BlogClient({ posts, tags }: { posts: PostMeta[]; tags: string[] }) {
  return (
    <Suspense fallback={null}>
      <BlogList posts={posts} tags={tags} />
    </Suspense>
  );
}
