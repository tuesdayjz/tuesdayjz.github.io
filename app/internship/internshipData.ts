export type Internship = {
  title: string;
  imageSrc: string;
  description: string[];
  link: string;
  stack: string[];
};

const internshipData: Internship[] = [
  {
    title: "And-D Inc.",
    imageSrc: "/internship/and-d.png",
    description: ["2023/3 - 2023/8", "backend engineer"],
    link: "https://www.and-d.co.jp/",
    stack: ["Ruby on Rails", "Node.js", "Docker", "AWS"],
  },
  {
    title: "Progate Inc.",
    imageSrc: "/internship/progate.webp",
    description: ["2023/8 - now", "front & backend engineer"],
    link: "https://prog-8.com/about",
    stack: ["React.js", "Next.js", "TypeScript", "Docker", "AWS"],
  },
];

export default internshipData;
