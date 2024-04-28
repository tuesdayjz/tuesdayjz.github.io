import {
  Box,
  Stack,
  List,
  Typography,
  ListItem,
  ListItemText,
} from "@mui/material";
import { MusicNoteRounded } from "@mui/icons-material";
import Link from "next/link";

const HobbyList = [
  {
    hobby: "Waching Takarazuka Revue and Kabuki",
    description:
      "I'm also interested in learning more about the good food around the theater.",
  },
  {
    hobby: "competitive programming",
    description: "My AtCoder Account: TuesdayJZ",
    url: "https://atcoder.jp/users/TuesdayJZ",
  },
  {
    hobby: "Reading / Writing",
    description:
      "I write on my blog about trivial things that come to mind in my daily life.",
    url: "https://oyasai-oishiina.hateblo.jp/",
  },
];

const HobbyItem = (props: {
  hobby: string;
  description: string;
  url: string;
}) => {
  return (
    <ListItem sx={{ paddingBottom: 2 }}>
      <Stack direction="row" spacing={2} alignItems="center">
        <Box bgcolor={"lightgrey"} height={70} borderRadius={100} width={5} />
        <ListItemText
          primary={
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="body1">{props.hobby}</Typography>
            </Stack>
          }
          secondary={
            <Stack direction="column">
              <Typography variant="body2">{props.description}</Typography>
              {props.url && (
                <Link href={props.url}>
                  <Typography variant="body2" component="a">
                    {props.url}
                  </Typography>
                </Link>
              )}
            </Stack>
          }
        />
      </Stack>
    </ListItem>
  );
};

const Hobby = () => {
  return (
    <Stack direction="column" spacing={2} width={600}>
      <Stack direction="row" spacing={1} alignItems="center">
        <MusicNoteRounded sx={{ color: "grey" }} />
        <Typography variant="h5">Hobbies</Typography>
      </Stack>
      <List dense>
        {HobbyList.map((hobby, index) => (
          <HobbyItem
            hobby={hobby.hobby}
            description={hobby.description}
            url={hobby.url || ""}
            key={index}
          />
        ))}
      </List>
    </Stack>
  );
};

export default Hobby;
