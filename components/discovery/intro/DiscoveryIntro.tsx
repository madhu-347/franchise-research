import { discoveryIntroData } from "@/data/discovery/discoveryIntroData";
import { robotoCondensed } from "@/fonts/robotoCondensed";
export default function DiscoveryIntro() {
  const { title, description, cta } = discoveryIntroData;

  return (
    <div className={`${robotoCondensed.className} flex  gap-1 lg:flex-row lg:items-center lg:justify-between`}>
      
        <h2 className="text-4xl font-bold ">
          {title}
        </h2>
        
     
      <div className="max-w-2xl flex flex-col gap-4 leading-tight"
       style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
              }}>
      <p className="text-gray-600">
          {description}
        </p>
      <a
        href={cta.href}
        className="w-fit rounded-md bg-pink-500 px-6 py-3 text-sm font-semibold text-white"
      >
        {cta.label}
      </a>
       </div>
    </div>
  );
}
