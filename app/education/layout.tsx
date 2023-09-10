import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function EducationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container
      maxWidth="lg"
      style={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        padding: "2rem 4rem",
      }}
    >
      <Typography
        variant="h2"
        style={{
          borderBottom: "2px solid #ccc",
          width: "30rem",
          marginBottom: "4rem",
        }}
      >
        Education
      </Typography>
      {children}
    </Container>
  );
}
