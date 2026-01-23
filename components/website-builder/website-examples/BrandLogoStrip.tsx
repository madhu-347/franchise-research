"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function BrandLogoStrip({ logos }: { logos: string[] }) {
  const [visibleCount, setVisibleCount] = useState(6);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) setVisibleCount(2); // Mobile
      else if (window.innerWidth < 1024) setVisibleCount(3); // Tablet
      else setVisibleCount(6); // Laptop
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % logos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [logos.length]);

  return (
    <div className="w-full overflow-hidden">
      <div
        className="flex gap-10 transition-transform duration-700 ease-in-out mx-6"
        style={{
          transform: `translateX(-${index * (100 / visibleCount)}%)`,
        }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={`${logo}-${i}`}
            className="flex items-center min-w-[140px] justify-center"
          >
            <Image
              src={logo}
              alt="Brand Logo"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
