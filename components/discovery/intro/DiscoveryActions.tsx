import { discoveryActionsData } from "@/data/discovery/discoveryActionsData";
import  { MoveRight } from "lucide-react";
import { robotoCondensed } from "@/fonts/robotoCondensed";

export default function DiscoveryActions() {
  return (
    <div className="flex text-[#0F3460] flex-wrap gap-3">
      {discoveryActionsData.map((action) => (
        <a
          key={action.label}
          href={action.href}
          className={`rounded px-6 py-2 text-sm font-semibold uppercase border border-[#0F3460] hover:bg-gray-50 ${robotoCondensed.className}`}
        >
          {action.label} <MoveRight size={14} className="inline-block ml-1" />
        </a>
      ))}
    </div>
  );
}
