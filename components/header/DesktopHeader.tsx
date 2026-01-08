"use client";

import { useState } from "react";
import { headerNavData, headerActions } from "@/data/headerData";
import { ChevronDown, Search } from "lucide-react";
import Logo from "./Logo";
import NavDropdown from "./NavDropDown";

export default function DesktopHeader() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-6 px-1 h-20 flex flex-nowrap items-center justify-between relative">
      {/* Logo */}
      <Logo />

      {/* Navigation */}
      <nav className="flex items-center gap-3 xl:gap-4 mr-1">

        {headerNavData.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={item.label} className="relative">
              {/* Nav label */}
              <button
                type="button"
                onClick={() => toggleDropdown(index)}
                className="flex items-center gap-1 text-[11px] xl:text-xs font-medium text-gray-800"

              >
                <span>{item.label}</span>

                {item.children && (
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>

              {/* Dropdown */}
              {item.children && (
                <div
                  className={`
                    absolute left-0 top-full mt-2 z-50
                    transform transition-all duration-200 ease-out
                    ${
                      isOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }
                  `}
                >
                  <NavDropdown items={item.children} />
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-2 xl:gap-3 whitespace-nowrap">
        <Search size={12} className="cursor-pointer hidden xl:block" />

        <a href={headerActions.contact.href} className="text-xs hidden xl:block">
          {headerActions.contact.label}
        </a>

        <a href={headerActions.login.href} className="text-xs hidden xl:block">
          {headerActions.login.label}
        </a>

        <a
            href={headerActions.primaryCTA.href}
            className="
                px-3 xl:px-4
                py-2
                rounded
                bg-[#F33FDE]
                font-semibold
                uppercase
                text-white
                text-xs xl:text-sm
                whitespace-nowrap
            "
            >
            {headerActions.primaryCTA.label}
        </a>

    

      <a
        href={headerActions.secondaryCTA.href}
        className="
            px-3 xl:px-4
            py-2
            rounded
            bg-[#0F3460]
            uppercase
            font-semibold
            text-white
            text-xs xl:text-sm
            whitespace-nowrap
        "
        >
        {headerActions.secondaryCTA.label}
        </a>


      </div>
    </div>
  );
}
