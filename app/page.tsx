import { Stack } from "@mui/material";
import { Metadata, NextPage } from "next";
import Education from "@/components/education";
import Career from "@/components/career";
import Hobby from "@/components/hobby";
import Interest from "@/components/interest";
import Affiliation from "@/components/affiliation";
import Project from "@/components/project";

const title = "tuesdayjz | Portfolio";
const description = "tuesdayjz's portfolio";

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title,
    description,
  },
};

const Portfolio: NextPage = () => {
  return (
    <Stack direction={"column"} spacing={2}>
      <Affiliation />
      <Education />
      <Career />
      <Project />
      <Interest />
      <Hobby />
    </Stack>
  );
};

export default Portfolio;
