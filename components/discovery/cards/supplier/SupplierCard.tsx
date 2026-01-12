import Image from "next/image";
import DiscoveryCard from "../DiscoveryCard";
import SupplierFilters from "./SupplierFilters";
import { supplierCardData } from "@/data/discovery/supplierData";
import { hostGrotesk } from "@/fonts/hostGrotesk";
import { passionOne } from "@/fonts/passionOne";

export default function SupplierCard() {
  const { logo, title, description } = supplierCardData;

  return (
    <DiscoveryCard
      variant="dark"
      left={
        <div className="flex flex-col gap-4">
          <Image
            src={logo}
            alt="Franchise Supplier"
            width={100}
            height={40}
            className="object-contain"
          />

          <h3 className="text-xl font-bold leading-snug">
            {title}
          </h3>

          <p className="text-gray-300 max-w-md">
            {description}
          </p>
        </div>
      }
      right={<SupplierFilters />}
    />
  );
}
