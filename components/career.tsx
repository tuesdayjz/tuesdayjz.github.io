import { ComputerRounded } from "@mui/icons-material";
import { List, ListItem, ListItemText, Typography, Stack } from "@mui/material";
import Link from "next/link";
import { ListItemBar } from "./listItemBar";

const CareerList = [
  {
    company: "Morgan Stanley",
    url: "https://www.morganstanley.com/",
    stack: "Python, Java",
    date: "2024.7.29 - ",
    description: "Technology Summer Analyst.",
    now: true,
  },
  {
    company: "Fixstars Corporation",
    url: "https://www.fixstars.com/",
    stack: "C++, Python, TVM, CUDA, TensorRT.",
    date: "2024.5 - 2024.6",
    description:
      "Optimizing computational graph in IR of TVM, a machine learning compiler.",
  },
  {
    company: "Progate, Inc",
    url: "https://progate.com/",
    stack: "Go, Typescript. React.js, Next.js, MySQL, AWS, Docker, CircleCI.",
    date: "2023.8 - now",
    description: "Developing Progate Path's DB, backend, frontend, CLI tool.",
  },
  {
    company: "and-d, Inc",
    url: "https://www.and-d.co.jp/",
    stack: "Ruby, Javascript, Python. Ruby on Rails, Node.js, AWS, Docker.",
    date: "2023.3 - 2023.7",
    description:
      "Developed a AI-based slide generator, signage system for a large-scale event.",
  },
];

const CareerItem = (props: {
  company: string;
  stack: string;
  date: string;
  description: string;
  url: string;
  now?: boolean;
}) => {
  return (
    <ListItem sx={{ paddingBottom: 2 }}>
      <Stack direction="row" spacing={2} alignItems="center">
        <ListItemBar height={80} now={props.now} />
        <Stack direction="column" spacing={0.5}>
          <ListItemText
            primary={
              <Stack direction="row" spacing={1} alignItems="center">
                <Link href={props.url}>
                  <Typography variant="body1" component="a">
                    {props.company}
                  </Typography>
                </Link>
                <Typography variant="body2">{props.date}</Typography>
              </Stack>
            }
            secondary={<Typography variant="body2">{props.stack}</Typography>}
          />
          <ListItemText>
            <Typography variant="body2">{props.description}</Typography>
          </ListItemText>
        </Stack>
      </Stack>
    </ListItem>
  );
};

const Career = () => {
  return (
    <Stack direction="column" spacing={2}>
      <Stack direction="row" spacing={1} alignItems="center">
        <ComputerRounded sx={{ color: "grey" }} />
        <Typography variant="h5">Career</Typography>
      </Stack>
      <List>
        {CareerList.map((career, index) => (
          <CareerItem
            company={career.company}
            stack={career.stack}
            date={career.date}
            description={career.description || ""}
            url={career.url}
            now={career.now}
            key={index}
          />
        ))}
      </List>
    </Stack>
  );
};

export default Career;
