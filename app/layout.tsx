import Footer from "@/components/footer";
import Header from "@/components/header";
import { Grid } from "@mui/material";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>tuesdayjz</title>
        <meta name="description" content="tuesdayjz's portfolio" />
        <meta name="author" content="tuesdayjz" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        <main>
          <Grid
            container
            justifyContent="center"
            direction="column"
            alignItems="center"
          >
            <Header />
            {children}
            <Footer />
          </Grid>
        </main>
      </body>
    </html>
  );
}
