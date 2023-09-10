import React from "react";
import {
  CssBaseline,
  Container,
  AppBar,
  Toolbar,
  Typography,
  Link,
  Button,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

export default function RootLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      <CssBaseline />
      <html lang="en">
        <body>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h4" component="div">
                <Link
                  href="./"
                  color="inherit"
                  style={{textDecoration: "none"}}
                >
                  kayo tei
                </Link>
              </Typography>
            </Toolbar>
          </AppBar>
          <Container>
            {props.children}
            {props.modal}
          </Container>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Button
              variant="contained"
              color="primary"
              href="/"
              startIcon={<HomeIcon />}
            >Home</Button>
          </div>
        </body>
      </html>
    </>
  );
}
