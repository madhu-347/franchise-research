"use client";

import { useState } from "react";
import TemplateSlide from "./TemplateSlide";
import TemplatePagination from "./TemplatePagination";

export default function TemplateCarousel({ templates }: { templates: string[] }) {
  const [index, setIndex] = useState(0);

  return (
    <div className="flex flex-col items-center gap-6">

      {/* Mobile + Tablet: Carousel Mode */}
      <div className="block lg:hidden">
        <TemplateSlide image={templates[index]} />
      </div>

      {/* Laptop + Desktop: Single Row */}
      <div className="hidden lg:block w-full overflow-x-auto">
        <div className="flex flex-nowrap gap-6 px-2">
          {templates.map((img) => (
            <TemplateSlide key={img} image={img} />
          ))}
        </div>
      </div>

      {/* Pagination for Carousel Mode */}
      <div className="block lg:hidden">
        <TemplatePagination
          count={templates.length}
          index={index}
          setIndex={setIndex}
        />
      </div>

    </div>
  );
}