"use client";

import { websiteBuilderHeroData } from "@/data/website-builder/heroData";
import { hostGrotesk } from "@/fonts/hostGrotesk";
import { CircleCheck } from "lucide-react";
import { robotoCondensed } from "@/fonts/robotoCondensed";

export default function WebsiteBuilderHero() {
  const {
    title,
    subtitle,
    features,
    primaryCta,
  } = websiteBuilderHeroData;

  return (
  <section
  className="
    relative
    w-full
    text-white
    overflow-hidden
    bg-no-repeat
    bg-cover
  "
  style={{
    backgroundImage: "url('/images/website-builder/hero-bg.png')",
    backgroundPosition: "10% center",
  }}
>
  {/* Dark overlay for readability */}
  <div className="absolute inset-0 bg-black/60 pointer-events-none" />

  <div className="relative mx-auto max-w-7xl px-6 py-24">
    <div className="max-w-2xl flex flex-col gap-6">

      {/* Title */}
      <h1 className={`text-4xl font-semibold leading-tight ${robotoCondensed.className}`}>
        {title}
      </h1>

      {/* Subtitle */}
      <p
        className="max-w-xl text-lg text-gray-300"
        style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        {subtitle}
      </p>

      {/* Feature badges */}
      <div className="flex flex-wrap gap-3 mt-2">
        {features.map((feature) => (
          <span
            key={feature.id}
            className="
              flex items-center gap-2
              rounded-md
              border border-gray-600
              px-4 py-3
              text-sm
              text-gray-200
            "
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
            }}
          >
            <CircleCheck className="text-[#FF5FEF]" />
            {feature.label}
          </span>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-6">
        <a
          href={primaryCta.href}
          className=
            {`inline-block
            rounded-md
            bg-[#F33FDE]
            px-6 py-3
            text-sm
            uppercase
            font-bold
            text-white
            hover:opacity-90
            transition ${robotoCondensed.className}`}
          
        >
          {primaryCta.label}
        </a>
      </div>

    </div>
  </div>
</section>

  );
}