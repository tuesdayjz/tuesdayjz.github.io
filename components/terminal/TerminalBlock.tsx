import { Box } from "@mui/material";
import { colors } from "@/lib/colors";
import { ReactNode } from "react";

export const TerminalBlock = ({ children, active }: { children: ReactNode; active?: boolean }) => (
  <Box sx={{ pl: 1.5, borderLeft: `2px solid ${active ? colors.primary : colors.border}` }}>
    {children}
  </Box>
);
