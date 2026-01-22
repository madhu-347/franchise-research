import DemoForm from "./DemoForm";
import { demoSectionData } from "@/data/website-builder/demoSectionData";
import { passionOne } from "@/fonts/passionOne";
import { hostGrotesk } from "@/fonts/hostGrotesk";
import { robotoCondensed } from "@/fonts/robotoCondensed";

export default function WebsiteBuilderDemoSection() {
  const { title, highlightTitle, subtitle } = demoSectionData;

  return (
    <section
        className="
            relative
            w-full
            text-white
            py-20
            px-6
            bg-cover
            bg-center
            bg-no-repeat
        "
        style={{
            backgroundImage: "url('/images/rankings/background-image.png')",
        }}
        >
      <div className="mx-auto max-w-5xl text-center">
        <h2 className={`text-3xl md:text-4xl font-bold ${robotoCondensed.className}`}>
          {title}
        </h2>

        <h1 className={`mt-2 text-2xl md:text-4xl font-extrabold ${robotoCondensed.className}`}>
          {highlightTitle}
        </h1>

        <p className="mt-4 max-w-2xl text-lg mx-auto text-gray-300"
          style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
        >
          {subtitle}
        </p>

        <DemoForm />
      </div>
    </section>
  );
}
