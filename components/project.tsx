import { BookOnlineRounded } from "@mui/icons-material";
import { List, ListItem, ListItemText, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { ListItemBar } from "./listItemBar";

const ProjectList = [
    {
        name: "brainf*ck interpreter in Rust",
        url: "https://github.com/tuesdayjz/bf-interpreter",
        date: "2024.3",
        description: "A simple brainf*ck interpreter written in Rust.",
    },
    {
        name: "init.g",
        url: "https://twitter.com/GoogleVRP/status/1711207378283360435",
        date: "2023.10.9 - 2023.10.10",
        description: "A 2-day security event hosted by Google Bug Hunters",
    },
    {
        name: "Google Data Center's Hardware Hackathon",
        url: "https://www.linkedin.com/posts/activity-7092758476916981760-7uL1/",
        date: "2023.8.25",
        description:
            "Won the 1st prize with a team of 4, challenged to several hardware problems.",
    },
    {
        name: "Google STEP",
        url: "https://buildyourfuture.withgoogle.com/programs/step/",
        date: "2023.5 - 2023.6",
        description:
            "2-month training program, learned about algorithms, data structures, and testing.",
        exurl: "https://github.com/tuesdayjz/STEP2023",
    },
    {
        name: "socket-Wordle",
        url: "https://github.com/tuesdayjz/socket-Wordle",
        date: "2023.1",
        description: "A simple Wordle game using Socket.io.",
    },
];

const ProjectItem = (props: {
    Project: {
        name: string;
        date?: string;
        description: string;
        url: string;
        exurl?: string;
    };
}) => {
    return (
        <ListItem sx={{ paddingBottom: 2 }}>
            <Stack direction="row" spacing={2} alignItems="center">
                <ListItemBar height={80} />
                <Stack direction="column" spacing={0.5}>
                    <ListItemText
                        primary={
                            <Stack direction="row" spacing={1} alignItems="center">
                                <Link href={props.Project.url}>
                                    <Typography variant="body1" component="a">
                                        {props.Project.name}
                                    </Typography>
                                </Link>
                                <Typography variant="body2">{props.Project.date}</Typography>
                            </Stack>
                        }
                        secondary={
                            <Typography variant="body2">
                                {props.Project.description}
                            </Typography>
                        }
                    />
                    <ListItemText>
                        {props.Project.exurl && (
                            <Link href={props.Project.exurl}>
                                <Typography variant="body2" component="a">
                                    {props.Project.exurl}
                                </Typography>
                            </Link>
                        )}
                    </ListItemText>
                </Stack>
            </Stack>
        </ListItem>
    );
};

const Project = () => {
    return (
        <Stack direction="column" spacing={2}>
            <Stack direction="row" spacing={1} alignItems="center">
                <BookOnlineRounded sx={{ color: "grey" }} />
                <Typography variant="h5">Projects</Typography>
            </Stack>
            <List dense>
                {ProjectList.map((project, index) => (
                    <ProjectItem Project={project} key={index} />
                ))}
            </List>
        </Stack>
    );
};

export default Project;
