import Image from "next/image";

export default function WebsiteExamplesPreview({ preview }: any) {
  return (
    <div className="flex justify-center lg:justify-end items-center h-full">
      <div className="w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[400px] xl:max-w-[440px]">
        <Image
          src={preview.screenshot}
          alt="Website Preview"
          width={460}
          height={920}
          className="w-full h-auto object-contain drop-shadow-2xl"
          priority
        />
      </div>
    </div>
  );
}