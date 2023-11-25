import { Box, Grid } from "@mui/material";
import { NextPage } from "next";
import Education from "@/components/education";
import Career from "@/components/career";
import Hobby from "@/components/hobby";
import Interest from "@/components/interest";
import Affiliation from "@/components/affiliation";

const Portfolio: NextPage = () => {
  return (
    <Grid container maxWidth="600px" direction="column">
      <Affiliation />
      <Interest />
      <Hobby />
      <Education />
      <Career />
    </Grid>
  );
};

export default Portfolio;
