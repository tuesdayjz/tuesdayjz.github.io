import { SchoolRounded, Circle } from "@mui/icons-material";
import {
  Typography,
  Stack,
  List,
  ListItem,
  Box,
  ListItemText,
} from "@mui/material";
import Link from "next/link";

const EducationList = [
  {
    name: "Waseda University",
    duration: "2024/4 - 2026/3",
    url: "https://www.waseda.jp/top/en",
    degree: "Master's Program",
    department: "Graduate School of Fundamental Science and Engineering",
    major: "Department of Computer Science and Engineering",
    lab: "Ueda Labolatory",
    labUrl: "https://www.ueda.info.waseda.ac.jp/index_j.html",
    now: true,
  },
  {
    name: "Waseda University",
    duration: "2020/4 - 2024/3",
    url: "https://www.waseda.jp/top/en",
    degree: "Bachelor's Program",
    department: "School of Fundamental Science and Engineering",
    major: "Department of Computer Science and Engineering",
    lab: "Ueda Labolatory",
    labUrl: "https://www.ueda.info.waseda.ac.jp/index_j.html",
    conferencePresentations: [
      {
        title: "PPL2024",
        date: "3/5-3/7",
        place: "Nigata, Japan",
        class: "Poster",
        url: "https://jssst-ppl.org/workshop/2024/program.html#posters",
      },
    ],
  },
  {
    name: "Tokyo Metropolitan Hibiya High School",
    duration: "2016/4 - 2019/3",
    url: "https://hibiya-h.metro.ed.jp/",
    degree: "High School Diploma",
    department: "General",
    major: "General",
    lab: "Badminton Club",
  },
];

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
        <Box
          bgcolor={props.Education.now ? "skyblue" : "lightgrey"}
          height={80}
          borderRadius={100}
          width={5}
        />
        <Stack direction="column" spacing={0.5}>
          <ListItemText
            primary={
              <Stack direction="row" spacing={1} alignItems="center">
                <Link href={props.Education.url}>
                  <Typography variant="body1" component="a">
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
                <Typography variant="body1" component="a">
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
                <Typography variant="body1">
                  {conferencePresentation.title}
                </Typography>
                <Typography variant="body2">
                  {conferencePresentation.date}
                </Typography>
                <Typography variant="body2">
                  {conferencePresentation.place}
                </Typography>
                <Typography variant="body2" component="a">
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
  return (
    <Stack direction="column" spacing={2} width={600}>
      <Stack direction="row" spacing={1} alignItems="center">
        <SchoolRounded sx={{ color: "grey" }} />
        <Typography variant="h5">Education</Typography>
      </Stack>
      <List dense>
        {EducationList.map((Education, index) => (
          <EducationItem key={index} Education={Education} />
        ))}
      </List>
    </Stack>
  );
};

export default Education;
