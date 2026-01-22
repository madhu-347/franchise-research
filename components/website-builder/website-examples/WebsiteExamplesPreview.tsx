import Image from "next/image";

export default function WebsiteExamplesPreview({ preview }: any) {
  return (
    <div className="relative flex justify-center">

      {/* Website Screenshot */}
      <div className="">
        <Image
          src={preview.screenshot}
          alt="Website Preview"
          width={720}
          height={620}
          className="rounded-lg object-cover"
        />
      </div>

    </div>
  );
}