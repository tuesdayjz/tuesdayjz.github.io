import swagData, { Internship } from "./internshipData"
import Box from "../components/Box/Box"

export default function Internship() {
  const data = swagData;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 auto-rows-max gap-6 m-10">
      {data.map(({ title, imageSrc, description, link, stack }) => (
        <Box title={title} imageSrc={imageSrc} description={description} link={link} stack={stack}></Box>
        ))}
    </div>
  );
}
