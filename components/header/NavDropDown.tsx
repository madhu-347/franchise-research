import Link from "next/link";
import { HeaderSubItem } from "@/types/headerTypes";
import { headerIconMap } from "@/utils/headerIconMap";

interface Props {
  items: HeaderSubItem[];
}

export default function NavDropdown({ items }: Props) {
  return (
    <div className="absolute top-full left-0 mt-3 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50">
      <ul className="py-2">
        {items.map((item) => {
          const Icon = item.icon
            ? headerIconMap[item.icon]
            : null;

          return (
            <li key={item.label}>
              <Link
                href={item.href}
                className="flex items-center gap-3 px-4 py-2 text-sm  hover:bg-gray-100"
              >
                {Icon && (
                  <div className="bg-[#CEE8F3] p-1 rounded-md">
                    <Icon
                      size={16}
                      className="text-gray-500 shrink-0"
                    />
                  </div>
                )}
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
