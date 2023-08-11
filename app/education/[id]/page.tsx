import CardDetail from "../../components/CardDetail/CardDetail";
import swagData, { Education } from "../educationData";

export default function WorkPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const data: Education = swagData.find((p) => p.id === id)!;

  return (
    <div className="w-8/12 container mx-auto my-10">
      <CardDetail data={data} />
    </div>
  );
}
