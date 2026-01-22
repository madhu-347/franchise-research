import Image from "next/image";

export default function StepCard({
  number,
  title,
  image,
}: {
  number: number;
  title: string;
  image: string;
}) {
  return (
    <div className="flex flex-col items-center text-center gap-4">

      {/* Step Badge */}
      <div className="flex items-center justify-center w-7 h-7 rounded-full border border-[#F33FDE] text-[#F33FDE] text-sm font-semibold">
        {number}
      </div>

      {/* Step Title */}
      <h3 className="text-lg font-semibold text-[#0F3460]">
        {title}
      </h3>

      {/* Step Image */}
      <div className="relative w-full max-w-[320px] aspect-square">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain"
        />
      </div>

    </div>
  );
}