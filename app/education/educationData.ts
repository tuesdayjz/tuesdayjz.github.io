export type Education = {
  id: string;
  title: string;
  imageSrc: string;
  description?: string;
};

const educationData: Education[] = [
  {
    id: "uni",
    title: "Waseda University",
    imageSrc: "/education/waseda.jpeg",
    description: "2020/4 - 2024/3 : Bachelor of Engineering in Computer Science course at Ueda Lab.",
  },
  {
    id: "high",
    title: "Tokyo Metropolitan Hibiya High School",
    imageSrc: "/education/hibiya.gif",
    description: "I was in badminton club.",
  },
  {
    id: "junior",
    title: "Koto-ku Kameido Junior High School",
    imageSrc: "/education/kame.jpeg",
    description: "I was in art club and had a lot of fun.",
  },
];

export default educationData;
