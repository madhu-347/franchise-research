import Image from "next/image";

interface FranchiseRowProps {
  brandName: string;
  industry: string;
  units: number;
  minInvestment: number;
  maxInvestment: number;
  cashRequired: number;
  logo: string;
}

export default function FranchiseRow({
  brandName,
  industry,
  units,
  minInvestment,
  maxInvestment,
  cashRequired,
  logo,
}: FranchiseRowProps) {
  return (
    <tr className="border-b">
  <td className="px-3 py-6 align-middle flex items-center gap-3">
    <img src={logo} alt={brandName} className="h-8 w-12 object-contain" />
   <p className="hidden lg:table-cell">
   {brandName}
   </p> 
  </td>

  <td className="px-3 py-3 align-middle">{industry}</td>

  <td className="px-3 py-3 align-middle">
    ${minInvestment.toLocaleString()} - ${maxInvestment.toLocaleString()}
  </td>

  <td className="px-3 py-3 align-middle hidden lg:table-cell">{units}</td>

  <td className="px-3 py-3 align-middle hidden lg:table-cell">
    ${cashRequired.toLocaleString()}
  </td>

  <td className="px-3 py-3 align-middle hidden lg:table-cell">
    <a href="#" className="text-[#F33FDE] text-xs">
      Visit Franchise Development Site &gt;
    </a>
  </td>
</tr>

  );
}
