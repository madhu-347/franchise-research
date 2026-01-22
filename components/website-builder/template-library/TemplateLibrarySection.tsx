"use client";

import { templateLibraryData } from "@/data/website-builder/templateLibraryData";
import TemplateLibraryHeader from "./TemplateLibraryHeader";
import TemplateCarousel from "./TemplateCarousel";
import VideoDemoBlock from "./VideoDemoBlock";

export default function TemplateLibrarySection() {
  const { title, backgroundImage, templates, video } = templateLibraryData;

  return (
    <section
      className="w-full py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="mx-auto max-w-7xl px-6 flex flex-col gap-14">

        <TemplateLibraryHeader title={title} />

        <TemplateCarousel templates={templates} />

        <VideoDemoBlock video={video} />

      </div>
    </section>
  );
}