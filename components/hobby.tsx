import {
  Box,
  Stack,
  List,
  Typography,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ArrowForwardIosRounded, MusicNote } from "@mui/icons-material";

const HobbyItem = (props: { hobby: string; description?: string }) => {
  return (
    <ListItem>
      <ListItemIcon>
        <MusicNote />
      </ListItemIcon>
      <ListItemText>
        <Typography variant="h6">{props.hobby}</Typography>
        {props.description ? (
          <Typography variant="body1">{props.description}</Typography>
        ) : null}
      </ListItemText>
    </ListItem>
  );
};

const Hobby = () => {
  return (
    <Box maxWidth="600px">
      <Stack direction="row" spacing={2} alignItems="center" mt="30px">
        <ArrowForwardIosRounded />
        <Typography variant="h5">Hobbies</Typography>
      </Stack>
      <List dense>
        <HobbyItem
          hobby="Waching Takarazuka Revue and Kabuki"
          description="I'm also interested in learning more about the good food around the theater."
        />
        <HobbyItem
          hobby="Writing"
          description="I write on my blog about trivial things that come to mind in my daily life."
        />
      </List>
    </Box>
  );
};

export default Hobby;
