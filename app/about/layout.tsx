import React from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function AboutLayout({children}: {children: React.ReactNode}) {
  return (
    <Container maxWidth="md" style={{padding: "2rem 0", textAlign: "center"}}>
      <Paper
        elevation={3}
        style={{backgroundColor: "#f0f0f0", padding: "2rem"}}
      >
        <Typography variant="h4" style={{marginBottom: "1.5rem"}}>
          About Me
        </Typography>
        <Typography variant="body1" style={{marginBottom: "2rem"}}>
          Hello, I'm Kayo Tei, a fourth-year student at Waseda University,
          majoring in Information and Computer Science. My interests include
          Takarazuka Revue, reading, writing, enjoying good food, and listening
          to music.
        </Typography>
      </Paper>
      <div style={{marginTop: "2rem", textAlign: "center"}}>{children}</div>
    </Container>
  );
}
