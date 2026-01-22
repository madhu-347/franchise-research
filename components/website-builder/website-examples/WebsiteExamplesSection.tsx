import { websiteExamplesData } from "@/data/website-builder/websiteExamplesData";
import WebsiteExamplesHeader from "./WebsiteExamplesHeader";
import BrandLogoStrip from "./BrandLogoStrip";
import WebsiteExamplesContent from "./WebsiteExamplesContent";
import WebsiteExamplesPreview from "./WebsiteExamplesPreview";

export default function WebsiteExamplesSection() {
  const { title, subtitle, logos, content, preview } = websiteExamplesData;

  return (
    <section className="w-full py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 flex flex-col gap-14">

        <WebsiteExamplesHeader title={title} subtitle={subtitle} />

        <BrandLogoStrip logos={logos} />

        <div className=" bg-[#10161D] grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          <WebsiteExamplesContent content={content} />

          <WebsiteExamplesPreview preview={preview} />

        </div>

      </div>
    </section>
  );
}