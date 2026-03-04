import { Box, Stack, Typography } from "@mui/material";
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import Link from "next/link";
import { colors } from "@/lib/colors";
import { siteConfig } from "@/lib/config";
import { IconBtn } from "@/components/terminal";

const Footer = () => {
    return (
        <Box sx={{ pt: 2, borderTop: `1px solid ${colors.border}`, mt: 2 }}>
            <Stack spacing={0.5}>
                <Stack direction="row" spacing={0.75} alignItems="center">
                    <Typography variant="body2" sx={{ color: colors.chrome, userSelect: "none" }}>kayo@tuesdayjz</Typography>
                    <Typography variant="body2" sx={{ color: colors.muted, userSelect: "none" }}>:~$</Typography>
                    <Typography variant="body2" sx={{ color: colors.text }}>logout</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between" alignItems="center" flexWrap="wrap" sx={{ gap: 1 }}>
                    <Typography variant="body2" sx={{ color: colors.chrome }}>
                        © {new Date().getFullYear()} {siteConfig.name}
                    </Typography>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Link href="/" style={{ textDecoration: "none" }}>
                            <Typography variant="body2" sx={{ "&:hover": { color: colors.primary } }}>portfolio</Typography>
                        </Link>
                        <Link href="/blog" style={{ textDecoration: "none" }}>
                            <Typography variant="body2" sx={{ "&:hover": { color: colors.primary } }}>blog</Typography>
                        </Link>
                        <IconBtn href={siteConfig.socials.twitter} icon={<Twitter fontSize="small" />} />
                        <IconBtn href={siteConfig.socials.github} icon={<GitHub fontSize="small" />} />
                        <IconBtn href={siteConfig.socials.linkedin} icon={<LinkedIn fontSize="small" />} />
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    );
};

export default Footer;
