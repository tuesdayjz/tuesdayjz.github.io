import {
  Box,
  Stack,
  List,
  Typography,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ArrowForwardIosRounded, ScienceRounded } from "@mui/icons-material";

const InterestItem = (props: { interest: string; description?: string }) => {
  return (
    <ListItem>
      <ListItemIcon>
        <ScienceRounded />
      </ListItemIcon>
      <ListItemText>
        <Typography variant="h6">{props.interest}</Typography>
        {props.description ? (
          <Typography variant="body1">{props.description}</Typography>
        ) : null}
      </ListItemText>
    </ListItem>
  );
};

const Interest = () => {
  return (
    <Box maxWidth="600px">
      <Stack direction="row" spacing={2} alignItems="center" mt="30px">
        <ArrowForwardIosRounded />
        <Typography variant="h5">Interests</Typography>
      </Stack>
      <List dense>
        <InterestItem
          interest="Theory of Programming Languages"
          description="Type theory, semantics, and formal verification."
        />
        <InterestItem
          interest="Category Theory"
          description="Especially interested in string diagrams and their applications to programming languages."
        />
        <InterestItem
          interest="Functional Programming"
          description="Experienced extending MinCaml, a compiler of minimal subset of OCaml, to support AArch64 assembly language. I'm currently learning Haskell."
        />
      </List>
    </Box>
  );
};

export default Interest;
