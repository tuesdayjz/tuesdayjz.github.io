import { AppBar, Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <AppBar
      component="footer"
      position="static"
      color="transparent"
      elevation={0}
      sx={{ maxWidth: "600px" }}
    >
      <Grid
        container
        maxWidth="600px"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="body1" alignSelf="center">
          © 2023 tuesdayjz
        </Typography>
      </Grid>
    </AppBar>
  );
};

export default Footer;
