import { AppBar, Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <AppBar
      component="footer"
      position="static"
      color="transparent"
      elevation={0}
      sx={{ maxWidth: "600px" }}
    >
      <Stack maxWidth="600px" justifyContent="center" alignItems="center">
        <Typography variant="body1" alignSelf="center">
          2024 Kayo Tei
        </Typography>
      </Stack>
    </AppBar>
  );
};

export default Footer;
