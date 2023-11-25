import { Box } from "@mui/material";
import { NextPage } from "next";
import Education from "@/components/education";
import Career from "@/components/career";
const Portfolio: NextPage = () => {
  return (
    <Box sx={{ alignItems: "center" }}>
      <Education />
      <Career />
    </Box>
  );
};

export default Portfolio;
