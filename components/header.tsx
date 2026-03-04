import { Box, Typography, Stack, Button, AppBar } from "@mui/material";
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import Link from "next/link";

const ButtonLink = (props: { href: string; avater: ReactJSXElement }) => {
    return (
        <Button component="a" href={props.href} sx={{ minWidth: 0, color: "primary.main" }}>
            {props.avater}
        </Button>
    );
};

const Buttons = () => {
    return (
        <Stack direction="row" spacing={1} justifyContent="center">
            <ButtonLink
                href="https://twitter.com/vegetable_umai"
                avater={<Twitter fontSize="small" />}
            />
            <ButtonLink href="https://github.com/tuesdayjz" avater={<GitHub fontSize="small" />} />
            <ButtonLink
                href="https://www.linkedin.com/in/kayo-t-66220925a/"
                avater={<LinkedIn fontSize="small" />}
            />
        </Stack>
    );
};

const Header = () => {
    return (
        <AppBar
            component="header"
            position="static"
            elevation={0}
            sx={{ maxWidth: "600px", width: "100%", mb: 2 }}
        >
            <Stack sx={{ py: 3 }} alignItems="center" spacing={1}>
                <Typography variant="body2" sx={{ color: "#3a6a3a", letterSpacing: 1 }}>
                    ~/portfolio
                </Typography>
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 700,
                        letterSpacing: 2,
                        "&::after": {
                            content: '"▋"',
                            display: "inline-block",
                            animation: "blink 1s step-end infinite",
                            marginLeft: "2px",
                        },
                        "@keyframes blink": {
                            "0%, 100%": { opacity: 1 },
                            "50%": { opacity: 0 },
                        },
                    }}
                >
                    Kayo Tei
                </Typography>
                <Typography variant="body2">
                    narcissus_blue@ruri.waseda.jp
                </Typography>
                <Buttons />
                <Stack direction="row" spacing={3}>
                    <Link href="/" style={{ textDecoration: "none" }}>
                        <Typography variant="body2" sx={{ "&:hover": { color: "#00ff41" } }}>
                            ~/portfolio
                        </Typography>
                    </Link>
                    <Link href="/blog" style={{ textDecoration: "none" }}>
                        <Typography variant="body2" sx={{ "&:hover": { color: "#00ff41" } }}>
                            ~/blog
                        </Typography>
                    </Link>
                </Stack>
            </Stack>
        </AppBar>
    );
};

export default Header;
