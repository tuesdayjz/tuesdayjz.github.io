import { Stack, List, Typography, ListItem, ListItemText } from "@mui/material";
import { ScienceRounded } from "@mui/icons-material";
import { ListItemBar } from "./listItemBar";

const InterestList = [
    {
        interest: "Theory of Programming Languages",
        description: "Type theory, semantics, formal verification.",
    },
    {
        interest: "Category Theory",
        description:
            "string diagrams and their applications to programming languages.",
    },
    {
        interest: "Quantum Theory",
        description:
            "quantum computation, quantum programming languages, quantum NLP.",
    },
    {
        interest: "Functional Programming",
        description:
            "Haskell, OCaml. I've experienced writing a mini-compiler of OCaml.",
    },
];

const InterestItem = (props: { interest: string; description: string }) => {
    return (
        <ListItem sx={{ paddingBottom: 2 }}>
            <Stack direction="row" spacing={2} alignItems="center">
                <ListItemBar height={70} />
                <ListItemText
                    primary={
                        <Stack direction="row" spacing={1} alignItems="center">
                            <Typography variant="body1">{props.interest}</Typography>
                        </Stack>
                    }
                    secondary={
                        <Typography variant="body2">{props.description}</Typography>
                    }
                />
            </Stack>
        </ListItem>
    );
};

const Interest = () => {
    return (
        <Stack direction="column" spacing={2}>
            <Stack direction="row" spacing={1} alignItems="center">
                <ScienceRounded sx={{ color: "grey" }} />
                <Typography variant="h5">Interests</Typography>
            </Stack>
            <List dense>
                {InterestList.map((interest, index) => (
                    <InterestItem
                        key={index}
                        interest={interest.interest}
                        description={interest.description}
                    />
                ))}
            </List>
        </Stack>
    );
};

export default Interest;
