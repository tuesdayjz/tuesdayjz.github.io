import { ArrowForwardIosRounded, SchoolRounded } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Stack,
} from "@mui/material";

const EducationItem = (props: {
  school: string;
  degree: string;
  date: string;
}) => {
  return (
    <ListItem>
      <ListItemIcon>
        <SchoolRounded />
      </ListItemIcon>
      <ListItemText>
        <Typography variant="h6">{props.school}</Typography>
        <Typography variant="subtitle1">{props.degree}</Typography>
        <Typography variant="subtitle1">{props.date}</Typography>
      </ListItemText>
    </ListItem>
  );
};

const Education = () => {
  return (
    <Box maxWidth="600px">
      <Stack direction="row" spacing={2} alignItems="center" mt="30px">
        <ArrowForwardIosRounded />
        <Typography variant="h5">Education</Typography>
      </Stack>
      <List dense>
        <EducationItem
          school="Waseda University"
          degree="M.S. in Computer Science"
          date="2024.4 - 2026.3"
        />
        <EducationItem
          school="Waseda University"
          degree="B.A. in Computer Science"
          date="2020.4 - 2024.3"
        />
        <EducationItem
          school="Tokyo Metropolitan Hibiya High School"
          degree="High School Diploma"
          date="2016.4 - 2019.3"
        />
      </List>
    </Box>
  );
};

export default Education;
