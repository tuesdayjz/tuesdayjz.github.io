import { Stack, Typography } from "@mui/material";
import { colors } from "@/lib/colors";

export const TerminalPrompt = ({ cmd }: { cmd: string }) => (
  <Stack direction="row" spacing={0.75} alignItems="center">
    <Typography variant="body2" sx={{ color: colors.chrome, userSelect: "none" }}>$</Typography>
    <Typography variant="body2" sx={{ color: colors.text }}>{cmd}</Typography>
  </Stack>
);
