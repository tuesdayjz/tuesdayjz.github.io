"use client";

import Giscus from "@giscus/react";
import { giscusConfig } from "@/lib/config";
import { Stack, Typography, Box } from "@mui/material";
import { colors } from "@/lib/colors";
import { useEffect, useState } from "react";

const theme =
    process.env.NODE_ENV === "production"
        ? "https://tuesdayjz.github.io/giscus-theme.css"
        : "dark";

interface GiscusMeta {
    totalCommentCount: number;
}

export default function GiscusComments() {
    const [meta, setMeta] = useState<GiscusMeta | null>(null);

    useEffect(() => {
        const handler = (e: MessageEvent) => {
            if (e.origin !== "https://giscus.app") return;
            const { giscus } = e.data ?? {};
            const disc = giscus?.discussion;
            if (!disc) return;
            setMeta({ totalCommentCount: disc.totalCommentCount ?? 0 });
        };
        window.addEventListener("message", handler);
        return () => window.removeEventListener("message", handler);
    }, []);

    if (!giscusConfig.repoId || !giscusConfig.categoryId) return null;

    return (
        <Stack spacing={0.5} sx={{ mt: 2 }}>
            <Stack direction="row" spacing={0.75} alignItems="center">
                <Typography variant="body2" sx={{ color: colors.chrome, userSelect: "none" }}>$</Typography>
                <Typography variant="body2" sx={{ color: colors.text }}>git log --comments</Typography>
                <Box sx={{ flex: 1 }} />
                {meta && (
                    <Typography variant="body2" sx={{ color: colors.chrome, fontSize: "0.78rem" }}>
                        💬 {meta.totalCommentCount}
                    </Typography>
                )}
            </Stack>
            <Box sx={{
                "& .giscus, & .giscus-frame": { width: "100%" },
                "& .giscus-frame": { border: "none", colorScheme: "normal" },
            }}>
                <Giscus
                    repo={giscusConfig.repo}
                    repoId={giscusConfig.repoId}
                    category={giscusConfig.category}
                    categoryId={giscusConfig.categoryId}
                    mapping="pathname"
                    strict="0"
                    reactionsEnabled="1"
                    emitMetadata="1"
                    inputPosition="top"
                    theme={theme}
                    lang="en"
                />
            </Box>
        </Stack>
    );
}
