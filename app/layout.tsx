"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Stack, Box, ThemeProvider, CssBaseline } from "@mui/material";
import { ReactNode } from "react";
import terminalTheme from "@/lib/theme";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={terminalTheme}>
          <CssBaseline />
          <Box component="main" role="main" sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
            <Stack direction="column" spacing={2} alignItems="center" sx={{ px: 2, pb: 4 }}>
              <Header />
              {children}
              <Footer />
            </Stack>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
