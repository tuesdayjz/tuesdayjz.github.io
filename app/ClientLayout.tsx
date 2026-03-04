"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import TerminalShell from "@/components/TerminalShell";
import { Box, ThemeProvider, CssBaseline } from "@mui/material";
import { ReactNode } from "react";
import terminalTheme from "@/lib/theme";

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={terminalTheme}>
      <CssBaseline />
      <Box
        component="main"
        role="main"
        sx={{ minHeight: "100vh", bgcolor: "background.default", display: "flex", justifyContent: "center", px: 2 }}
      >
        <TerminalShell>
          <Header />
          {children}
          <Footer />
        </TerminalShell>
      </Box>
    </ThemeProvider>
  );
}
