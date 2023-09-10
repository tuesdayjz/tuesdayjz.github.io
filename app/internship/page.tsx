import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import swagData from "./internshipData";

export default function Internship() {
  const data = swagData;

  return (
    <Grid container spacing={2} justifyContent="center" m={2}>
      {data.map(({title, imageSrc, description, link, stack}, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={4}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={imageSrc}
              alt={title}
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description.join(", ")}
              </Typography>
              <a href={link} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'underline'}}>
                Learn More about {title}
              </a>
              <Typography variant="body2" color="text.secondary">
                Stack: {stack.join(", ")}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
