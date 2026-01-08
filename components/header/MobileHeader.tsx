"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, CircleX } from "lucide-react";
import Logo from "./Logo";
import { headerNavData, headerActions } from "@/data/headerData";
import { headerIconMap } from "@/utils/headerIconMap";

export default function MobileHeader() {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  //Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    setActiveIndex(null);
  };

  return (
    <div
      className={`px-4 h-16 flex items-center justify-between ${
        open ? "border-b-0" : "border-b"
      }`}
    >
      <Logo />

      {/* Hamburger */}
      <button onClick={() => setOpen(true)}>
        <Menu size={22} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={closeMenu}
        />
      )}

      {/* Slide-in Menu */}
<div
  className={`
     fixed top-0 right-0 z-50
    w-[70%] max-w-sm
    bg-white
    transform transition-transform duration-300 ease-out
    rounded-xl
    m-2
    h-[calc(100vh-1rem)]
    ${open ? "translate-x-0" : "translate-x-full"}
  `}
>
  {/*FIXED HEADER */}
  <div className="h-12 px-4 flex items-center justify-end  rounded-t-xl bg-white sticky top-0 z-10">
    <button onClick={closeMenu}>
      <CircleX size={18} />
    </button>
  </div>

  {/* 🔽 SCROLLABLE CONTENT */}
  <div className="p-6 overflow-y-auto h-[calc(100%-3.5rem)]">
    {/* Navigation */}
    <nav className="space-y-4">
      {headerNavData.map((item, index) => {
        const isOpen = activeIndex === index;

        return (
          <div key={item.label}>
            {/* Parent item */}
            <button
              type="button"
              className="w-full flex items-center justify-between text-base font-medium"
              onClick={() =>
                setActiveIndex(isOpen ? null : index)
              }
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
              }}
            >
              <span>{item.label}</span>

              {item.children && (
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              )}
            </button>

            {/* Children */}
            {item.children && isOpen && (
              <div className="ml-4 mt-3 space-y-3">
                <div className="h-px bg-gray-200 my-5" />

                {item.children.map((child) => {
                  const Icon = child.icon
                    ? headerIconMap[child.icon]
                    : null;

                  return (
                    <a
                      key={child.label}
                      href={child.href}
                      onClick={closeMenu}
                      className="flex items-center gap-3 text-sm"
                    >
                      {Icon && (
                        <div className="bg-[#CEE8F3] p-1 rounded-md">
                          <Icon
                            size={16}
                            className="text-gray-500 shrink-0"
                          />
                        </div>
                      )}
                      <span>{child.label}</span>
                    </a>
                  );
                })}
              </div>
            )}

            {/* Divider */}
            <div
              className={`
                h-px bg-gray-500 my-5
                transition-all duration-300 ease-out
                ${isOpen ? "opacity-100" : "opacity-30"}
              `}
            />
          </div>
        );
      })}
    </nav>

    {/* Actions */}
    <div className="mt-8 space-y-3">
      <a
        href={headerActions.contact.href}
        onClick={closeMenu}
        className="block text-sm"
      >
        {headerActions.contact.label}
      </a>

      <a
        href={headerActions.login.href}
        onClick={closeMenu}
        className="block text-sm text-[#F33FDE]"
      >
        {headerActions.login.label}
      </a>

      <a
        href={headerActions.primaryCTA.href}
        onClick={closeMenu}
        className="block text-center py-2 rounded bg-[#F33FDE] uppercase text-white font-semibold"
      >
        {headerActions.primaryCTA.label}
      </a>

      <a
        href={headerActions.secondaryCTA.href}
        onClick={closeMenu}
        className="block text-center py-2 rounded bg-[#0F3460] uppercase text-white font-semibold"
      >
        {headerActions.secondaryCTA.label}
      </a>
    </div>
  </div>
</div>

    </div>
  );
}
