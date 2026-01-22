import { robotoCondensed } from "@/fonts/robotoCondensed";

export default function WebsiteExamplesHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="text-center max-w-4xl mx-auto">
      <h2 className={`text-3xl font-bold text-gray-900 ${robotoCondensed.className}`}>{title}</h2>
      <p
        className="mt-3 text-lg text-gray-600"
        style={{ fontFamily: "Georgia, serif" }}
      >
        {subtitle}
      </p>
    </div>
  );
}