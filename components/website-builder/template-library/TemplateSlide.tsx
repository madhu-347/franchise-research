import Image from "next/image";

export default function TemplateSlide({ image }: { image: string }) {
  return (
    <div
      className="
        shrink-0
        w-[174px]
        h-[415px]
        rounded-md
        overflow-hidden
        bg-white
        shadow-sm
        mx-auto
      "
    >
      <Image
        src={image}
        alt="Template Preview"
        width={194}
        height={415}
        className="h-full w-full object-cover"
      />
    </div>
  );
}