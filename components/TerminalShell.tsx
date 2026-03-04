"use client";
import { Box, Stack, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { colors } from "@/lib/colors";

export default function TerminalShell({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const currentPath = `~${pathname === "/" ? "/portfolio" : pathname}`;

    return (
        <Box
            sx={{
                maxWidth: "720px",
                width: "100%",
                border: `1px solid ${colors.border}`,
                borderRadius: 2,
                overflow: "hidden",
                my: 3,
            }}
        >
            {/* Single title bar for the whole page */}
            <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{ px: 2, py: 0.75, bgcolor: colors.titleBar, borderBottom: `1px solid ${colors.border}`, position: "sticky", top: 0, zIndex: 10 }}
            >
                <Box sx={{ width: 11, height: 11, borderRadius: "50%", bgcolor: "#ff5f57" }} />
                <Box sx={{ width: 11, height: 11, borderRadius: "50%", bgcolor: "#febc2e" }} />
                <Box sx={{ width: 11, height: 11, borderRadius: "50%", bgcolor: "#28c840" }} />
                <Typography
                    variant="body2"
                    sx={{ flex: 1, textAlign: "center", color: colors.muted, fontSize: "0.75rem", letterSpacing: 1 }}
                >
                    {currentPath}
                </Typography>
            </Stack>

            {/* All page content rendered inside */}
            <Stack sx={{ px: 3, py: 2 }} spacing={0}>
                {children}
            </Stack>
        </Box>
    );
}
