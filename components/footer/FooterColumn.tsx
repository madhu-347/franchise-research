import Image from "next/image";

export default function FooterColumn({
  title,
  links,
  logos,
}: {
  title: string;
  links: string[];
  logos?: string[];
}) {
  return (
    <div className="hidden lg:flex flex-col gap-3">
      <h4 className="text-[#F33FDE] font-semibold">{title}</h4>

      {links.map((link) => (
        <p key={link} className="text-white hover:text-[#F33FDE] cursor-pointer">
          {link}
        </p>
      ))}

      {/* Logo strip aligned inside column */}
      {/* {logos && (
      <div className="flex flex-wrap items-center gap-3 pt-4">

          {logos.map((src) => (
            <Image
              key={src}
              src={src}
              alt="Footer Logo"
              width={80}
              height={24}
              className="h-6 w-auto object-contain"
            />
          ))}
        </div>
      )} */}
    </div>
  );
}
