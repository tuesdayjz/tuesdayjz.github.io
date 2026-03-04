import { Stack } from "@mui/material";
import { Metadata, NextPage } from "next";
import Education from "@/components/education";
import Interest from "@/components/interest";
import Affiliation from "@/components/affiliation";
import { siteConfig } from "@/lib/config";

const desc = "Planning to write about anything I find interesting in my life.";

export const metadata: Metadata = {
  title: "tuesdayjz's page",
  description: desc,
  openGraph: {
    type: "website",
    url: "/",
    title: "tuesdayjz's page",
    description: desc,
  },
  twitter: { title: "tuesdayjz's page", description: desc },
};

const Portfolio: NextPage = () => {
  return (
    <Stack
      direction={"column"}
      spacing={4}
      sx={{ width: "100%", maxWidth: 720 }}
    >
      <Affiliation />
      <Education />
      <Interest />
    </Stack>
  );
};

export default Portfolio;
