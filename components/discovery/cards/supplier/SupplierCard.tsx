import Image from "next/image";
import DiscoveryCard from "../DiscoveryCard";
import SupplierFilters from "./SupplierFilters";
import { supplierCardData } from "@/data/discovery/supplierData";
import { hostGrotesk } from "@/fonts/hostGrotesk";
import { passionOne } from "@/fonts/passionOne";

export default function SupplierCard() {
  const { logo, title, description, ctas } = supplierCardData;

  return (
    <DiscoveryCard
      variant="dark"
       background={
    <div
      className="
        absolute
        top-6 right-[-150px]
        h-40 w-70
        bg-no-repeat bg-contain bg-bottom

        lg:bottom-0
        lg:left-1/3 lg:right-auto
        lg:h-75 lg:w-[320px]
        lg:-translate-x-1/2
      "
      style={{
        backgroundImage:
          "url('/images/discovery/rhino-linocut.png')",
      }}
    />
  }
      left={
  <div className="relative flex flex-col gap-3 overflow-hidden">
    {/* Rhino background */}
    <div
      className="pointer-events-none absolute  h-48 w-72 bg-no-repeat bg-contain"
    />

    {/* Content */}
    <div className="relative z-10 flex flex-col gap-3 mb-2">
      {/* Logo */}
      <div className="relative h-10 w-14">
        <Image
          src={logo}
          alt="Franchise Supplier"
          fill
          className="object-contain"
          priority
        />
      </div>

      <h3
        className={`text-2xl font-bold leading-snug ${passionOne.className}`}
      >
        {title}
      </h3>

      <p
        className={`text-xl font-bold leading-snug text-[#E5CAFA] ${passionOne.className}`}
      >
        Find the Right Supplier
      </p>

      <p
        className={`text-gray-300 max-w-md ${hostGrotesk.className}`}
      >
        {description}Find the Right Supplier
      </p>

      <a
        href={ctas.href}
        className="w-fit rounded-md bg-[#E5CAFA] px-4 py-2 text-sm font-semibold text-[#0F3460]"
      >
        {ctas.label}
      </a>
    </div>
  </div>
}
      right={<SupplierFilters />}
    />
  );
}
