import { Box } from "@mui/material";
import { NextPage } from "next";
import Education from "@/components/education";
import Career from "@/components/career";
import Hobby from "@/components/hobby";
import Interest from "@/components/interest";
import Affiliation from "@/components/affiliation";

const Portfolio: NextPage = () => {
  return (
    <Box maxWidth="md">
      <Affiliation />
      <Interest />
      <Hobby />
      <Education />
      <Career />
    </Box>
  );
};

export default Portfolio;
