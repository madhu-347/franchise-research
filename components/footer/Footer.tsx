import FooterColumn from "./FooterColumn";
import FooterBottom from "./FooterBottom";
import { footerData } from "../../data/footerData";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="w-full bg-[#0B0F16] text-xs text-white px-6 py-12">

  {/* Hide columns below desktop */}
  <div className="hidden lg:grid mx-auto max-w-7xl grid-cols-5 gap-8">
    {footerData.map((column) => (
      <FooterColumn key={column.title} {...column} />
    ))}
  </div>

  {/* Logo strip always visible */}
  <div className="mx-auto  max-w-7xl flex justify-center lg:justify-start gap-2">
    {footerData[0].logos?.map((src) => (
      <Image
        key={src}
        src={src}
        alt="Footer Logo"
        width={100}
        height={30}
        className="h-6 w-auto object-contain"
      />
    ))}
  </div>
  <div className="flex justify-center gap-5 text-[#F33FDE] text-lg mt-6 lg:hidden">
    <i className="fa-brands fa-instagram" />
    <i className="fa-brands fa-facebook" />
    <i className="fa-brands fa-youtube" />
    <i className="fa-brands fa-linkedin" />
    <i className="fa-brands fa-x-twitter" />
    </div>

  {/* Bottom Section */}
  <FooterBottom />

</footer>

  );
}
