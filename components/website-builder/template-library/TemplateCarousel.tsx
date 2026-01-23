"use client";

import { useState, useRef } from "react";
import TemplateSlide from "./TemplateSlide";
import TemplatePagination from "./TemplatePagination";

export default function TemplateCarousel({ templates }: { templates: string[] }) {
  const [index, setIndex] = useState(0);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const minSwipeDistance = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;

    if (distance > minSwipeDistance) {
      // Swipe left → next
      setIndex((prev) => (prev + 1) % templates.length);
    } else if (distance < -minSwipeDistance) {
      // Swipe right → previous
      setIndex((prev) => (prev - 1 + templates.length) % templates.length);
    }
  };

  return (
    <div className="flex flex-col items-center gap-6">

      {/* Mobile + Tablet: Swipe Carousel */}
      <div
        className="block lg:hidden w-full flex justify-center"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
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