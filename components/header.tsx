import {
  Box,
  Typography,
  Stack,
  Button,
  AppBar,
  Container,
} from "@mui/material";
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

const ButtonLink = (props: { href: string; avater: ReactJSXElement }) => {
  return (
    <Button component="a" href={props.href}>
      {props.avater}
    </Button>
  );
};

const Buttons = () => {
  return (
    <Stack direction="row" spacing={1}>
      <ButtonLink
        href="https://twitter.com/vegetable_umai"
        avater={<Twitter />}
      />
      <ButtonLink href="https://github.com/tuesdayjz" avater={<GitHub />} />
      <ButtonLink
        href="https://www.linkedin.com/in/kayo-t-66220925a/"
        avater={<LinkedIn />}
      />
    </Stack>
  );
};
const Header = () => {
  return (
    <AppBar
      component="header"
      position="static"
      color="transparent"
      elevation={0}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            textAlign: "center",
          }}
        >
          <Stack direction="column" spacing={1}>
            <Typography variant="h4">Kayo Tei (tuesdayjz)</Typography>
            <Buttons />
          </Stack>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
