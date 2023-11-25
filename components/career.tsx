import {
  ArrowForwardIosRounded,
  CircleRounded,
  ComputerRounded,
  DoneOutlineRounded,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Stack,
} from "@mui/material";

const CareerItem = (props: {
  affiliation: string;
  stack: string;
  date: string;
  description: string;
}) => {
  return (
    <ListItem>
      <ListItemIcon>
        <ComputerRounded />
      </ListItemIcon>
      <ListItemText>
        <Typography variant="h6">{props.affiliation}</Typography>
        <Typography variant="subtitle1">{props.stack}</Typography>
        <Typography variant="subtitle1">{props.date}</Typography>
        <Typography variant="body2">{props.description}</Typography>
      </ListItemText>
    </ListItem>
  );
};

const Career = () => {
  return (
    <Box sx={{ alignSelf: "center" }}>
      <Stack direction="row" spacing={2} alignItems="center" mt="30px">
        <ArrowForwardIosRounded />
        <Typography variant="h5">Career</Typography>
      </Stack>
      <List>
        <CareerItem
          affiliation="Progate, Inc"
          stack="Go, Typescript. React.js, Next.js, AWS, Docker, CircleCI."
          date="2023.8 - now"
          description="Developing Progate Path's frontend, CLI tool."
        />
        <CareerItem
          affiliation="and-d, Inc"
          stack="Ruby, Javascript, Python. Ruby on Rails, Node.js, AWS, Docker"
          date="2023.3 - 2023.7"
          description="Developed a AI-based powerpoint slide generator, and a signage system for a large-scale event."
        />
      </List>
    </Box>
  );
};

export default Career;
