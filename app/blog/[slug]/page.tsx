import { getPost, getAllPosts } from "@/lib/blog";
import { Metadata } from "next";
import Link from "next/link";
import { Chip, Stack, Typography, Box } from "@mui/material";
import { colors } from "@/lib/colors";
import { TerminalPrompt, TerminalBlock } from "@/components/terminal";
import GiscusComments from "@/components/GiscusComments";

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
    <Stack direction="column" spacing={1.5} sx={{ width: "100%", maxWidth: 720 }}>
      {/* back prompt */}
      <Link href="/blog" style={{ textDecoration: "none" }}>
        <TerminalPrompt cmd="cd ~/blog/" />
      </Link>

      {/* cat command + frontmatter block */}
      <Stack spacing={0.5}>
        <TerminalPrompt cmd={`cat ${slug}.md`} />
        <TerminalBlock>
          <Typography variant="body2" sx={{ color: colors.chrome }}>---</Typography>
          <Typography variant="body2">
            <span style={{ color: colors.chrome }}>title</span>
            <span style={{ color: colors.chrome }}> : </span>
            {post.title}
          </Typography>
          <Typography variant="body2">
            <span style={{ color: colors.chrome }}>date</span>
            <span style={{ color: colors.chrome }}>  : </span>
            <span style={{ color: colors.muted }}>{post.date}</span>
          </Typography>
          <Stack direction="row" spacing={0.5} alignItems="center">
            <Typography variant="body2" component="span">
              <span style={{ color: colors.chrome }}>tags</span>
              <span style={{ color: colors.chrome }}>  : </span>
            </Typography>
            {post.tags.map((tag) => (
              <Link key={tag} href={`/blog?tag=${encodeURIComponent(tag)}`}>
                <Chip label={tag} size="small" variant="outlined" clickable />
              </Link>
            ))}
          </Stack>
          <Typography variant="body2" sx={{ color: colors.chrome }}>---</Typography>
        </TerminalBlock>
      </Stack>

      <Box
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        sx={{
          "& h1, & h2, & h3": {
            fontWeight: 700,
            marginTop: 2,
            marginBottom: 1,
            color: colors.primary,
            "&::before": { content: '"# "', color: colors.chrome },
          },
          "& p": { marginBottom: 1.5, color: colors.text },
          "& ul, & ol": { paddingLeft: 3, marginBottom: 1.5, color: colors.text },
          "& a": { color: colors.primary },
          "& code": {
            fontFamily: "'Courier New', monospace",
            backgroundColor: colors.codeBg,
            border: `1px solid ${colors.border}`,
            padding: "0 4px",
            borderRadius: 1,
            color: colors.text,
          },
          "& pre": {
            backgroundColor: colors.codeBg,
            border: `1px solid ${colors.border}`,
            padding: 2,
            borderRadius: 1,
            overflowX: "auto",
          },
        }}
      />

      <GiscusComments />
    </Stack>
  );
}
