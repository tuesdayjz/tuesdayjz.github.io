export default function Box({
  title,
  imageSrc,
  description,
  link,
  stack,
}: {
    title: string;
    imageSrc: string;
    description: string[];
    link: string;
    stack: string[];
  }) {
  const imageSize = 100;
  return (
    <div className="bg-white pl-5 pr-10 pt-5 pb-5 rounded-lg">
      <a href={link} className="inline-flex"><img
        alt=""
        src={imageSrc}
        height={imageSize}
        width={imageSize}
        className="object-cover pr-5"
      /></a>
      <h2 className="text-[2rem] inline-flex pb-5">{title}</h2>
      <p className="text-[1.2rem] py-2 whitespace-pre">{description.join(".\r\n")}</p>
      <p className="text-[1rem]">stack : {stack.join(", ")}</p>
    </div>
  );
}
