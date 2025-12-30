"use client";

import { useRef, useState } from "react";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
}

export default function MediaCard({ title, description }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [mediaUrl, setMediaUrl] = useState<string | null>(null);
  const [mediaType, setMediaType] = useState<"image" | "video" | null>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);

    if (file.type.startsWith("image")) {
      setMediaType("image");
    } else if (file.type.startsWith("video")) {
      setMediaType("video");
    }

    setMediaUrl(url);
  };

  return (
    <div
      onClick={handleClick}
      className="relative h-100 rounded-sm overflow-hidden bg-gray-300 cursor-pointer"
    >
      {/* Hidden file input */}
      <input
        ref={inputRef}
        type="file"
        accept="image/*,video/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Media Preview */}
      {mediaUrl && mediaType === "image" && (
        <Image
          src={mediaUrl}
          alt={title}
          fill
          className="object-cover"
        />
      )}

      {mediaUrl && mediaType === "video" && (
        <video
          src={mediaUrl}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Placeholder (when no media selected) */}
      {!mediaUrl && (
        <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">
          Click to upload image or video
        </div>
      )}

      {/* Overlay Content */}
      <div className="absolute bottom-1 left-1 right-1 bg-white rounded-sm p-4 pointer-events-none">
        <h3 className="text-sm font-semibold mb-2">
          {title}
        </h3>
        <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
}
