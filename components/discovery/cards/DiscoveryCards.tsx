import GrowthClubCard from "./growthClub/GrowthClubCard";
import SupplierCard from "./supplier/SupplierCard";

export default function DiscoveryCards() {
  return (
    <div className="space-y-8">
      <GrowthClubCard />
      <SupplierCard />
    </div>
  );
}
