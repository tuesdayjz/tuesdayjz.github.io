import { getPost, getAllPosts } from "@/lib/blog";
import { Metadata } from "next";
import Link from "next/link";
import { Chip, Stack, Typography, Box } from "@mui/material";
import { ArrowBackRounded } from "@mui/icons-material";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  return { title: `${post.title} | tuesdayjz` };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  return (
    <Stack direction="column" spacing={2} sx={{ width: "100%", maxWidth: 600 }}>
      <Link href="/blog" style={{ textDecoration: "none" }}>
        <Stack direction="row" spacing={0.5} alignItems="center">
          <ArrowBackRounded fontSize="small" sx={{ color: "grey" }} />
          <Typography variant="body2" color="text.secondary">
            Back to Blog
          </Typography>
        </Stack>
      </Link>

      <Stack direction="column" spacing={1}>
        <Typography variant="h5">{post.title}</Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography variant="body2" color="text.secondary">
            {post.date}
          </Typography>
          <Stack direction="row" spacing={0.5} flexWrap="wrap">
            {post.tags.map((tag) => (
              <Link key={tag} href={`/blog?tag=${encodeURIComponent(tag)}`}>
                <Chip label={tag} size="small" variant="outlined" clickable />
              </Link>
            ))}
          </Stack>
        </Stack>
      </Stack>

      <Box
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        sx={{
          "& h1, & h2, & h3": {
            fontWeight: 700,
            marginTop: 2,
            marginBottom: 1,
            color: "#6bcb77",
            "&::before": { content: '"# "', color: "#3a6a3a" },
          },
          "& p": { marginBottom: 1.5, color: "#c8e6c9" },
          "& ul, & ol": { paddingLeft: 3, marginBottom: 1.5, color: "#c8e6c9" },
          "& a": { color: "#6bcb77" },
          "& code": {
            fontFamily: "'Courier New', monospace",
            backgroundColor: "#161c16",
            border: "1px solid #1e2e1e",
            padding: "0 4px",
            borderRadius: 1,
            color: "#c8e6c9",
          },
          "& pre": {
            backgroundColor: "#161c16",
            border: "1px solid #1e2e1e",
            padding: 2,
            borderRadius: 1,
            overflowX: "auto",
          },
        }}
      />
    </Stack>
  );
}
