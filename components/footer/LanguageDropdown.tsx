"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const languages = ["English", "Spanish", "French"];

export default function LanguageDropdown() {
  const [selected, setSelected] = useState("English");
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-[10px] text-white">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 hover:text-[#F33FDE]"
      >
        {selected}
        <ChevronDown size={16} />
      </button>

      {open && (
        <div className="absolute left-0 mt-2 w-32 rounded-md bg-[#0B0F16] border border-gray-700 shadow-lg z-10">
          {languages.map((lang) => (
            <p
              key={lang}
              onClick={() => {
                setSelected(lang);
                setOpen(false);
              }}
              className="px-3 py-2 text-sm hover:bg-gray-800 cursor-pointer"
            >
              {lang}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
