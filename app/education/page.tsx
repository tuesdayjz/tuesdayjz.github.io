import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import educationData from "./educationData";

export default function Education() {
  const data = educationData;

  return (
    <Grid container spacing={2} justifyContent="center" m={2}>
      {data.map(({id, title, imageSrc}) => (
        <Grid item key={id} xs={12} sm={6} md={4} lg={4}>
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
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
