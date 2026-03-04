import { Stack } from "@mui/material";
import { Metadata, NextPage } from "next";
import Education from "@/components/education";
import Hobby from "@/components/hobby";
import Interest from "@/components/interest";
import Affiliation from "@/components/affiliation";

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
    <Stack direction={"column"} spacing={4} sx={{ width: "100%", maxWidth: 600 }}>
      <Affiliation />
      <Education />
      <Interest />
      <Hobby />
    </Stack>
  );
};

export default Portfolio;
