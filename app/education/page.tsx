import swagData from "./educationData"
import Card from "../components/Card/Card"

export default function Education() {
  const data = swagData;
  return (
    <div className="grid grid-rows-1 sm:grid-rows-2 md:grid-rows-3 lg:grid-rows-3 gap-6 m-10">
      {data.map(({ id, title, imageSrc }) => (
        <Card key={id} id={id} title={title} imageSrc={imageSrc}></Card>
        ))}
    </div>
  );
}
