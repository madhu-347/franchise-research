import { robotoCondensed } from "@/fonts/robotoCondensed";
import { CircleCheck } from "lucide-react";

export default function WebsiteExamplesContent({ content }: any) {
  return (
    <div className={`text-white rounded-lg flex flex-col gap-3 ${robotoCondensed.className}`}>

      <h3 className="text-3xl font-semibold">{content.heading}</h3>

      <p
        className="text-gray-300 text-lg"
        style={{ fontFamily: "Georgia, serif" }}
      >
        {content.description}
      </p>

      <ul className="flex flex-col gap-2 text-xl">
        {content.bullets.map((item: string) => (
          <li key={item} className="flex items-center gap-3">
            <CircleCheck className="text-[#F33FDE] w-5 h-5" />
            {item}
          </li>
        ))}
      </ul>

      <a
        href={content.cta.href}
        className="mt-4 w-fit rounded-md bg-[#F33FDE] px-6 py-3 text-sm font-semibold hover:opacity-90"
      >
        {content.cta.label}
      </a>

    </div>
  );
}