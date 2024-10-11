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
                    {new Date().getFullYear()}, Kayo Tei
                </Typography>
            </Stack>
        </AppBar>
    );
};

export default Footer;
