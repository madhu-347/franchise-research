import { websiteExamplesData } from "@/data/website-builder/websiteExamplesData";
import WebsiteExamplesHeader from "./WebsiteExamplesHeader";
import BrandLogoStrip from "./BrandLogoStrip";
import WebsiteExamplesContent from "./WebsiteExamplesContent";
import WebsiteExamplesPreview from "./WebsiteExamplesPreview";

export default function WebsiteExamplesSection() {
  const { title, subtitle, logos, content, preview } = websiteExamplesData;

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl py-5 px-6 lg:px-16 flex flex-col gap-12">

        <WebsiteExamplesHeader title={title} subtitle={subtitle} />

        <BrandLogoStrip logos={logos} />

        {/* Dark content block */}
        <div className="bg-[#10161D] rounded-md px-6 sm:px-8 lg:px-16 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <WebsiteExamplesContent content={content} />

          <WebsiteExamplesPreview preview={preview} />

        </div>

      </div>
    </section>
  );
}