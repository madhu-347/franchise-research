"use client";

import { useState } from "react";
import Image from "next/image";
import VideoModal from "./VideoModal";
import { PlayCircle } from "lucide-react";

export default function VideoDemoBlock({ video }: any) {
  const [open, setOpen] = useState(false);

  const thumbnail = `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`;

  return (
    <div className="text-center flex flex-col gap-4">

      <h3 className="text-2xl font-bold text-[#0F3460]">
        {video.title}
      </h3>

      <p className="text-gray-600">{video.subtitle}</p>

      <button
        type="button"
        onClick={() => setOpen(true)}
        className="relative mx-auto max-w-3xl w-full aspect-video rounded-lg overflow-hidden group"
      >
        <Image
          src={thumbnail}
          alt="Video Preview"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <PlayCircle className="w-16 h-16 text-white group-hover:scale-110 transition" />
        </div>
      </button>

      {open && (
        <VideoModal
          youtubeId={video.youtubeId}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
}