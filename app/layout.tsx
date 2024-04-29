"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { useTheme } from "@emotion/react";
import { Stack, Box, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const theme = useTheme();
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <Box component="main" role="main">
            <Stack direction="column" spacing={2} alignItems="center">
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
