"use client";
import { useTheme } from "@mui/material";
import { Box, useMediaQuery } from "@mui/material";

export const ListItemBar = ({
    height,
    now = false,
}: {
    height: number;
    now?: boolean;
}) => {
    const theme = useTheme();
    const isScreenWidthSmall = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Box
            bgcolor={now ? "#00ff41" : "#1a3a1a"}
            height={height}
            borderRadius={100}
            width={isScreenWidthSmall ? 0 : 4}
        />
    );
};
