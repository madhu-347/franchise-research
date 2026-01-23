"use client";

import { X } from "lucide-react";

export default function VideoModal({
  youtubeId,
  onClose,
}: {
  youtubeId: string;
  onClose: () => void;
}) {
  const embedUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4">

      <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">

        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 text-white hover:opacity-80"
        >
          <X size={22} />
        </button>

        <iframe
          className="w-full h-full"
          src={embedUrl}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

      </div>
    </div>
  );
}