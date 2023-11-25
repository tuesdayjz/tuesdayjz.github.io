import { AppBar, Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <AppBar
      component="footer"
      position="static"
      color="transparent"
      elevation={0}
    >
      <Container maxWidth="md">
        <Typography variant="body1" alignSelf="center">
          © 2023 tuesdayjz
        </Typography>
      </Container>
    </AppBar>
  );
};

export default Footer;
