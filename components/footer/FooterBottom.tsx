import LanguageDropdown from "./LanguageDropdown";

export default function FooterBottom() {
  return (
    <div className="mt-10 border-t border-white pt-6 text-[10px] text-white">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex gap-4">
            <p>© 2026 1851 Franchise</p>
            <LanguageDropdown />
        </div>
        

        <div className="flex gap-4">
          <p className="hover:text-[#F33FDE] cursor-pointer underline">Privacy Policy</p>
          <p className="hover:text-[#F33FDE] cursor-pointer underline">Site Map</p>
          <p className="hover:text-[#F33FDE] cursor-pointer underline">Terms of use</p>
        </div>

        <div className="hidden text-sm lg:flex flex-col gap-4 md:flex-row text-[#F33FDE] md:items-center md:justify-between">
            <i className="fa-brands fa-instagram" />
            <i className="fa-brands fa-facebook" />
            <i className="fa-brands fa-youtube" />
            <i className="fa-brands fa-linkedin" />
            <i className="fa-brands fa-x-twitter" />
        </div>
      </div>

     <p className="mt-4 text-center md:text-left leading-relaxed">
        This information is not intended as an offer to sell, or the solicitation of an offer to buy, a franchise. It is for information purposes only. Currently, the following states regulate the offer and sale of franchises: California, Hawaii, Illinois, Indiana, Maryland, Michigan, Minnesota, New York, North Dakota, Oregon, Rhode Island, South Dakota, Virginia, Washington, and Wisconsin. If you are a resident of one of these states, we will not offer you a franchise unless and until we have complied with applicable pre-sale registration and disclosure requirements in your jurisdiction. Franchise offerings are made by Franchise Disclosure Document only.
      </p>
    </div>
  );
}