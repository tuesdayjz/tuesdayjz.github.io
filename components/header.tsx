"use client";

import { Typography, Stack, Box } from "@mui/material";
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { colors } from "@/lib/colors";
import { siteConfig } from "@/lib/config";
import { IconBtn } from "@/components/terminal";

interface Seg { text: string; bg: string; fg: string; }

const PowerlinePrompt = ({ segments }: { segments: Seg[] }) => (
    <Stack direction="row" alignItems="center" spacing={0.25} flexWrap="wrap" useFlexGap>
        {segments.map((seg, i) => (
            <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 0.25 }}>
                <Box sx={{ bgcolor: seg.bg, px: 1.2, py: 0.15, borderRadius: 0.75 }}>
                    <Typography sx={{ color: seg.fg, fontSize: "0.76rem", fontWeight: 700, whiteSpace: "nowrap", fontFamily: "inherit" }}>
                        {seg.text}
                    </Typography>
                </Box>
                <Typography sx={{ color: "#2a3a2a", fontSize: "0.85rem", lineHeight: 1, userSelect: "none" }}>❯</Typography>
            </Box>
        ))}
    </Stack>
);

const Header = () => {
    const pathname = usePathname();
    const currentPath = `~${pathname === "/" ? "/portfolio" : pathname}`;
    const segments: Seg[] = [
        { text: "kayo@tuesdayjz", bg: "#182818", fg: "#6bcb77" },
        { text: currentPath,      bg: "#162030", fg: "#90caf9" },
        { text: "⎇ main",         bg: "#231930", fg: "#ce93d8" },
        { text: "⚡ Next.js 15",  bg: "#0d2222", fg: "#4db6ac" },
    ];

    return (
        <Box sx={{ pb: 2, borderBottom: `1px solid #1a2a1a`, mb: 2 }}>
            <Stack spacing={0.75}>
                <PowerlinePrompt segments={segments} />

                {/* whoami output */}
                <Stack direction="row" spacing={2} alignItems="center" sx={{ pl: 0.5 }} flexWrap="wrap" useFlexGap>
                    <Typography variant="h5" sx={{
                        fontWeight: 700, letterSpacing: 2,
                        "&::after": { content: '"▋"', display: "inline-block", animation: "blink 1s step-end infinite", marginLeft: "2px", fontSize: "0.85em" },
                        "@keyframes blink": { "0%,100%": { opacity: 1 }, "50%": { opacity: 0 } },
                    }}>
                        Kayo Tei
                    </Typography>
                    <Typography variant="body2" sx={{ color: colors.muted }}>{siteConfig.email}</Typography>
                    <Stack direction="row">
                        <IconBtn href={siteConfig.socials.twitter} icon={<Twitter fontSize="small" />} />
                        <IconBtn href={siteConfig.socials.github} icon={<GitHub fontSize="small" />} />
                        <IconBtn href={siteConfig.socials.linkedin} icon={<LinkedIn fontSize="small" />} />
                    </Stack>
                </Stack>

                {/* nav */}
                <Stack direction="row" spacing={0.75} alignItems="center" sx={{ mt: 0.25 }}>
                    <Typography variant="body2" sx={{ color: colors.chrome, userSelect: "none" }}>$</Typography>
                    <Typography variant="body2" sx={{ color: colors.muted, userSelect: "none" }}>ls ~/</Typography>
                    {[{ href: "/", label: "portfolio/" }, { href: "/blog", label: "blog/" }].map(({ href, label }) => {
                        const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
                        return (
                            <Link key={href} href={href} style={{ textDecoration: "none" }}>
                                <Typography variant="body2" sx={{
                                    color: active ? colors.primary : colors.muted,
                                    "&:hover": { color: colors.primary },
                                }}>
                                    {label}
                                </Typography>
                            </Link>
                        );
                    })}
                </Stack>
            </Stack>
        </Box>
    );
};

export default Header;
