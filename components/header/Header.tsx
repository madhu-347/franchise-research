"use client";

import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200">
      {/* Desktop Header */}
      <div className="hidden lg:block">
        <DesktopHeader />
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden">
        <MobileHeader />
      </div>
    </header>
  );
}
