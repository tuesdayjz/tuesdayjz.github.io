import { createTheme } from "@mui/material/styles";

const terminalTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#111314",
      paper: "#111314",
    },
    primary: {
      main: "#6bcb77",
    },
    secondary: {
      main: "#6bcb77",
    },
    text: {
      primary: "#c8e6c9",
      secondary: "#7aaa7a",
    },
    divider: "#1e2e1e",
    action: {
      hover: "rgba(107,203,119,0.07)",
    },
  },
  typography: {
    fontFamily: "'Courier New', Courier, monospace",
    h4: { color: "#6bcb77", fontWeight: 700 },
    h5: { color: "#6bcb77", fontWeight: 700 },
    body1: { color: "#c8e6c9" },
    body2: { color: "#7aaa7a" },
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
          color: "#6bcb77",
          "&:hover": { backgroundColor: "rgba(107,203,119,0.08)" },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderColor: "#3a6a3a",
          color: "#c8e6c9",
          fontFamily: "'Courier New', Courier, monospace",
          "&.MuiChip-filled": {
            backgroundColor: "#2a4a2a",
            color: "#6bcb77",
            borderColor: "#6bcb77",
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
        root: { color: "#6bcb77" },
      },
    },
  },
});

export default terminalTheme;
