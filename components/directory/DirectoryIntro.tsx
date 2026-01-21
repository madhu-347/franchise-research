import { robotoCondensed } from "@/fonts/robotoCondensed";

interface DirectoryIntroProps {
  breadcrumb: string[];
  title: string;
  description: string;
}

export default function DirectoryIntro({
  breadcrumb,
  title,
  description,
}: DirectoryIntroProps) {
  return (
    <section className="mb-10">
      {/* Breadcrumb */}
      <p className="text-sm text-gray-500 mb-2">
        {breadcrumb.join(" / ")}
      </p>

      {/* Title */}
      <h1 className={`text-4xl font-bold ${robotoCondensed.className}`}>
        {title}
      </h1>

      {/* Description */}
      <p className="mt-3 text-xl text-gray-600 leading-relaxed"
       style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
          }}
          >
        {description}
      </p>
    </section>
  );
}
