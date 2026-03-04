import { SchoolRounded, Circle } from "@mui/icons-material";
import { Typography, Stack, List, ListItem, ListItemText } from "@mui/material";
import Link from "next/link";
import { ListItemBar } from "./listItemBar";
import { getSectionData } from "@/lib/content";

interface ConferencePresentation {
    title: string;
    date: string;
    place: string;
    class: string;
    url: string;
}

interface EducationItem {
    name: string;
    duration: string;
    url: string;
    degree: string;
    department: string;
    major: string;
    lab: string;
    labUrl?: string;
    now?: boolean;
    conferencePresentations?: ConferencePresentation[];
}

interface EducationData {
    items: EducationItem[];
}

const EducationItem = (props: {
    Education: {
        name: string;
        duration: string;
        url: string;
        degree: string;
        department: string;
        major: string;
        lab: string;
        labUrl?: string;
        now?: boolean;
        conferencePresentations?: {
            title: string;
            date: string;
            place: string;
            class: string;
            url: string;
        }[];
    };
}) => {
    return (
        <ListItem sx={{ paddingBottom: 2 }}>
            <Stack direction="row" spacing={2} alignItems="center">
                <ListItemBar height={80} now={props.Education.now} />
                <Stack direction="column" spacing={0.5}>
                    <ListItemText
                        primaryTypographyProps={{ component: "div" }}
                        secondaryTypographyProps={{ component: "div" }}
                        primary={
                            <Stack direction="row" spacing={1} alignItems="center">
                                <Link href={props.Education.url}>
                                    <Typography variant="body1">
                                        {props.Education.name}
                                    </Typography>
                                </Link>
                                <Typography variant="body2">
                                    {props.Education.duration}
                                </Typography>
                            </Stack>
                        }
                        secondary={
                            <Typography variant="body2">
                                {props.Education.degree} - {props.Education.department}
                            </Typography>
                        }
                    />
                    <Stack direction="row" spacing={1}>
                        <Typography variant="body1">{`${props.Education.major} - `}</Typography>
                        {props.Education.labUrl ? (
                            <Link href={props.Education.labUrl}>
                                <Typography variant="body1">
                                    {props.Education.lab}
                                </Typography>
                            </Link>
                        ) : (
                            <Typography variant="body1">{props.Education.lab}</Typography>
                        )}
                    </Stack>
                    {props.Education.conferencePresentations?.map(
                        (conferencePresentation, index) => (
                            <Stack
                                direction="row"
                                spacing={1}
                                key={index}
                                alignItems="center"
                            >
                                <Circle sx={{ fontSize: 10, color: "lightgrey" }} />
                                <Link href={conferencePresentation.url}>
                                    <Typography variant="body1">
                                        {conferencePresentation.title}
                                    </Typography>
                                </Link>
                                <Typography variant="body2">
                                    {`${conferencePresentation.date} ${conferencePresentation.place}.`}
                                </Typography>
                                <Typography variant="body2">
                                    {conferencePresentation.class}
                                </Typography>
                            </Stack>
                        ),
                    )}
                </Stack>
            </Stack>
        </ListItem>
    );
};

const Education = () => {
    const { items } = getSectionData<EducationData>("education");
    return (
        <Stack direction="column" spacing={2}>
            <Stack direction="row" spacing={1} alignItems="center">
                <SchoolRounded sx={{ color: "grey" }} />
                <Typography variant="h5">Education</Typography>
            </Stack>
            <List dense>
                {items.map((Education, index) => (
                    <EducationItem key={index} Education={Education} />
                ))}
            </List>
        </Stack>
    );
};

export default Education;
