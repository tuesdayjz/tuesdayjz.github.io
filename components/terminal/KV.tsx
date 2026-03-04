import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import { colors } from "@/lib/colors";

export const KV = ({ k, v, href, minWidth = 72 }: { k: string; v: string; href?: string; minWidth?: number }) => (
  <Stack direction="row" spacing={1}>
    <Typography variant="body2" sx={{ color: colors.chrome, minWidth, userSelect: "none" }}>{k} :</Typography>
    {href ? (
      <Link href={href} style={{ textDecoration: "none" }}>
        <Typography variant="body2" sx={{ color: colors.primary, "&:hover": { textDecoration: "underline" } }}>{v}</Typography>
      </Link>
    ) : (
      <Typography variant="body2">{v}</Typography>
    )}
  </Stack>
);
