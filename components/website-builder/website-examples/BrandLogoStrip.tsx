import Image from "next/image";

export default function BrandLogoStrip({ logos }: { logos: string[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      {logos.map((logo) => (
        <Image
          key={logo}
          src={logo}
          alt="Brand Logo"
          width={120}
          height={40}
          className="h-10 w-auto object-contain transition"
        />
      ))}
    </div>
  );
}