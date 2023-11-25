import { Apartment, ArrowForwardIosRounded } from "@mui/icons-material";
import {
  Box,
  Typography,
  Stack,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import Link from "next/link";

const Affiliation = () => {
  return (
    <Box maxWidth="600px">
      <Stack direction="row" spacing={2} alignItems="center" mt="30px">
        <ArrowForwardIosRounded />
        <Typography variant="h5">Affiliation</Typography>
      </Stack>
      <List dense>
        <ListItem>
          <ListItemIcon>
            <Apartment />
          </ListItemIcon>
          <ListItemText>
            <Typography variant="body1">Waseda University</Typography>
            <Typography variant="body1">
              School of Fundamental Science and Engineering
            </Typography>
            <Typography variant="body1">
              Department of Computer Science and Engineering
            </Typography>
            <Typography variant="body1">
              Bachelor's Program at{" "}
              <Link href="https://www.ueda.info.waseda.ac.jp/index_j.html">
                Ueda Labolatory
              </Link>
            </Typography>
          </ListItemText>
        </ListItem>
      </List>
    </Box>
  );
};

export default Affiliation;
