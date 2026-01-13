import { discoveryIntroData } from "@/data/discovery/discoveryIntroData";
import { robotoCondensed } from "@/fonts/robotoCondensed";

export default function DiscoveryIntro() {
  const { title, description, cta } = discoveryIntroData;

  return (
    <div
      className={`${robotoCondensed.className} grid grid-cols-1 gap-8 lg:grid-cols-[60%_40%] lg:items-start`}
    >
      {/* Left: Heading */}
      <div>
        <h2 className="text-4xl font-bold leading-tight">
          {title}
        </h2>
      </div>

      {/* Right: Description + CTA */}
      <div className="flex max-w-md flex-col gap-4">
        <p
          className="text-gray-600 leading-snug"
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
          }}
        >
          {description}
        </p>

        <a
          href={cta.href}
          className="w-fit rounded-md bg-[#F33FDE] px-6 py-3 text-sm font-semibold uppercase text-white"
        >
          {cta.label}
        </a>
      </div>
    </div>
  );
}
