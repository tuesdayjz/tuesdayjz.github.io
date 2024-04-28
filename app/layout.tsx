import Footer from "@/components/footer";
import Header from "@/components/header";
import { Stack, Box } from "@mui/material";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Box component="main" role="main">
          <Stack direction="column" spacing={2} alignItems="center">
            <Header />
            {children}
            <Footer />
          </Stack>
        </Box>
      </body>
    </html>
  );
}
