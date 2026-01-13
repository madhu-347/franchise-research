import Image from "next/image";
import DiscoveryCard from "../DiscoveryCard";
import GrowthClubFilters from "./GrowthClubFilters";
import { growthClubCardData } from "@/data/discovery/growthClubData";
import { passionOne } from "@/fonts/passionOne";
import { hostGrotesk } from "@/fonts/hostGrotesk";

export default function GrowthClubCard() {
  const { logo, title, description, ctas } = growthClubCardData;

  return (
    <DiscoveryCard
      left={
        <div className="flex flex-col gap-4">
          <Image
            src={logo}
            alt="1851 Growth Club"
            width={120}
            height={40}
            color=""
            className="object-contain"
          />

          <h3 className={`text-2xl font-bold text-[#0F3460] leading-snug ${passionOne.className}`}>
            {title}
          </h3>

          <p className={`bg-linear-to-r from-[#0F3460] to-[#161B22] bg-clip-text text-transparent  max-w-md ${hostGrotesk.className}`}>
            {description}
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            {ctas.map((cta) => {
              const base =
                "rounded-md px-4 py-2 text-sm font-semibold bg-[#E5CAFA] text-[#0F3460]";

              if (cta.variant === "primary") {
                return (
                  <a
                    key={cta.label}
                    href={cta.href}
                    className={`${base}`}
                  >
                    {cta.label}
                  </a>
                );
              }

              if (cta.variant === "secondary") {
                return (
                  <a
                    key={cta.label}
                    href={cta.href}
                    className={`${base}`}
                  >
                    {cta.label}
                  </a>
                );
              }

              return (
                <a
                  key={cta.label}
                  href={cta.href}
                  className="rounded-md px-4 py-2 text-sm font-semibold bg-[#E5CAFA] text-[#0F3460]"
                >
                  {cta.label}
                </a>
              );
            })}
          </div>
        </div>
      }
      right={<GrowthClubFilters />}
    />
  );
}
