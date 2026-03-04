import { createTheme } from "@mui/material/styles";
import { colors } from "@/lib/colors";

const terminalTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#111314",
      paper: "#111314",
    },
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.primary,
    },
    text: {
      primary: colors.text,
      secondary: colors.muted,
    },
    divider: "#1e2e1e",
    action: {
      hover: "rgba(107,203,119,0.07)",
    },
  },
  typography: {
    fontFamily: "'Courier New', Courier, monospace",
    h4: { color: colors.primary, fontWeight: 700 },
    h5: { color: colors.primary, fontWeight: 700 },
    body1: { color: colors.text },
    body2: { color: colors.muted },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#111314",
          scrollbarColor: "#3a5a3a #111314",
          "&::-webkit-scrollbar": { width: 6 },
          "&::-webkit-scrollbar-track": { background: "#111314" },
          "&::-webkit-scrollbar-thumb": {
            background: "#3a5a3a",
            borderRadius: 3,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#111314",
          borderBottom: "1px solid #1e2e1e",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: colors.primary,
          "&:hover": { backgroundColor: "rgba(107,203,119,0.08)" },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderColor: "#3a6a3a",
          color: colors.text,
          fontFamily: "'Courier New', Courier, monospace",
          "&.MuiChip-filled": {
            backgroundColor: "#2a4a2a",
            color: colors.primary,
            borderColor: colors.primary,
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: { borderColor: "#1e2e1e" },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: { color: colors.primary },
      },
    },
  },
});

export default terminalTheme;
