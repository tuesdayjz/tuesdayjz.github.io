import { BadgeRounded } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  Stack,
} from "@mui/material";
import Link from "next/link";

const School = {
  school: "Waseda University",
  degree: "M.E. in Computer Science",
  year: "1st year",
  supervisor: "Prof. Kazunori Ueda",
  url: "https://www.ueda.info.waseda.ac.jp/~ueda/index.html",
};

const AffiliationItem = (props: {
  school: string;
  degree: string;
  year: string;
  supervisor: string;
  url: string;
}) => {
  return (
    <ListItem sx={{ paddingBottom: 2 }}>
      <Stack direction="row" spacing={2} alignItems="center">
        <Box bgcolor={"lightgrey"} height={70} borderRadius={100} width={5} />
        <ListItemText
          primary={<Typography variant="body1">{props.school}</Typography>}
          secondary={
            <Stack>
              <Typography variant="body2">{`${props.degree} - ${props.year}`}</Typography>
              <Stack direction="row" spacing={1}>
                <Typography variant="body2">Supervisor:</Typography>
                <Link href={props.url}>
                  <Typography variant="body2">{props.supervisor}</Typography>
                </Link>
              </Stack>
            </Stack>
          }
        />
      </Stack>
    </ListItem>
  );
};

const Affiliation = () => {
  return (
    <Stack direction="column" spacing={2} width={600}>
      <Stack direction="row" spacing={1} alignItems="center">
        <BadgeRounded sx={{ color: "grey" }} />
        <Typography variant="h5">Affiliation</Typography>
      </Stack>
      <List dense>
        <AffiliationItem
          school={School.school}
          degree={School.degree}
          year={School.year}
          supervisor={School.supervisor}
          url={School.url}
        />
      </List>
    </Stack>
  );
};

export default Affiliation;
