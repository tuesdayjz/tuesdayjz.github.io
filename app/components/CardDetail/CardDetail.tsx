import Image from "next/image";
import { Education } from "../../education/educationData";

export default function CardDetail({ data }: { data: Education }) {
  return (
    <div className="p-10 w-50 bg-white rounded-lg flex flex-col items-center border-gray-700 border-2">
      <Image
        alt=""
        src={data.imageSrc}
        height={600}
        width={800}
        className="col-span-2 mb-6"
      />
      <div>
        <h2 className="text-[1.5rem] mb-2 text-center">{data.title}</h2>
        <p>{data.description}</p>
        <div className="flex flex-col items-center mt-4">
          <p className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"><a href="/education">back</a></p>
        </div>
      </div>
    </div>
  );
}
