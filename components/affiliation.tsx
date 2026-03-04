import { BadgeRounded } from "@mui/icons-material";
import { List, ListItem, ListItemText, Typography, Stack } from "@mui/material";
import Link from "next/link";
import { ListItemBar } from "./listItemBar";
import { getSectionData } from "@/lib/content";

interface AffiliationData {
    school: string;
    degree: string;
    year: string;
    supervisor: string;
    url: string;
}

const AffiliationItem = (props: {
    school: string;
    degree: string;
    year: string;
    supervisor: string;
    url: string;
}) => {
    return (
        <ListItem sx={{ paddingBottom: 2 }}>
            <Stack direction="row" spacing={2} alignItems="center">
                <ListItemBar height={70} />
                <ListItemText
                    primaryTypographyProps={{ component: "div" }}
                    secondaryTypographyProps={{ component: "div" }}
                    primary={<Typography variant="body1">{props.school}</Typography>}
                    secondary={
                        <Stack>
                            <Typography variant="body2">{`${props.degree} - ${props.year}`}</Typography>
                            <Stack direction="row" spacing={1}>
                                <Typography variant="body2">Supervisor:</Typography>
                                <Link href={props.url}>
                                    <Typography variant="body2">{props.supervisor}</Typography>
                                </Link>
                            </Stack>
                        </Stack>
                    }
                />
            </Stack>
        </ListItem>
    );
};

const Affiliation = () => {
    const data = getSectionData<AffiliationData>("affiliation");
    return (
        <Stack direction="column" spacing={2}>
            <Stack direction="row" spacing={1} alignItems="center">
                <BadgeRounded sx={{ color: "grey" }} />
                <Typography variant="h5">Affiliation</Typography>
            </Stack>
            <List dense>
                <AffiliationItem
                    school={data.school}
                    degree={data.degree}
                    year={data.year}
                    supervisor={data.supervisor}
                    url={data.url}
                />
            </List>
        </Stack>
    );
};

export default Affiliation;
