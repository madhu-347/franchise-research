"use client";

import { useRef, useState, useEffect } from "react";
import { sidebarArticles } from "@/data/franchiseResearch";
import SidebarItem from "./SidebarItem";
import { ChevronDown, ChevronUp } from "lucide-react";

const MIN_THUMB_HEIGHT = 24;
const SCROLL_STEP = 80;

export default function ScrollableSidebar() {
  const contentRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [thumbHeight, setThumbHeight] = useState(MIN_THUMB_HEIGHT);
  const [thumbTop, setThumbTop] = useState(0);

  const isDragging = useRef(false);
  const dragStartY = useRef(0);
  const dragStartTop = useRef(0);

  // ---- Sync thumb with content scroll ----
  useEffect(() => {
    const content = contentRef.current;
    const track = trackRef.current;
    if (!content || !track) return;

    const updateThumb = () => {
      const { scrollTop, scrollHeight, clientHeight } = content;
      const trackHeight = track.clientHeight;

      // No scrolling needed
      if (scrollHeight <= clientHeight) {
        setThumbHeight(trackHeight);
        setThumbTop(0);
        return;
      }

      //thumb height calculation
      const calculatedThumbHeight =
        (clientHeight / scrollHeight) * trackHeight;

      const finalThumbHeight = Math.max(
        calculatedThumbHeight,
        MIN_THUMB_HEIGHT
      );

      const maxThumbTop = trackHeight - finalThumbHeight;

      const calculatedThumbTop =
        (scrollTop / (scrollHeight - clientHeight)) * maxThumbTop;

      setThumbHeight(finalThumbHeight);
      setThumbTop(isNaN(calculatedThumbTop) ? 0 : calculatedThumbTop);
    };

    updateThumb();
    content.addEventListener("scroll", updateThumb);
    window.addEventListener("resize", updateThumb);

    return () => {
      content.removeEventListener("scroll", updateThumb);
      window.removeEventListener("resize", updateThumb);
    };
  }, []);

  // ---- Drag handling ----
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;

      const content = contentRef.current;
      const track = trackRef.current;
      if (!content || !track) return;

      const deltaY = e.clientY - dragStartY.current;
      const trackHeight = track.clientHeight;
      const maxThumbTop = trackHeight - thumbHeight;

      const newThumbTop = Math.min(
        Math.max(dragStartTop.current + deltaY, 0),
        maxThumbTop
      );

      const scrollRatio = newThumbTop / maxThumbTop;

      content.scrollTop =
        scrollRatio * (content.scrollHeight - content.clientHeight);
    };

    const stopDragging = () => {
      isDragging.current = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", stopDragging);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", stopDragging);
    };
  }, [thumbHeight]);

  const startDrag = (e: React.MouseEvent) => {
    isDragging.current = true;
    dragStartY.current = e.clientY;
    dragStartTop.current = thumbTop;
  };

  const scrollByAmount = (amount: number) => {
    contentRef.current?.scrollBy({
      top: amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative flex h-full">
      {/* Scrollable content */}
      <div
        ref={contentRef}
        className="flex-1 overflow-y-scroll no-scrollbar p-5 space-y-4"
      >
        {sidebarArticles.map(article => (
          <SidebarItem key={article.id} article={article} />
        ))}
      </div>

      {/* Custom scrollbar */}
      <div className="hidden lg:flex w-10 flex-col items-center py-3">
        {/* Up button */}
        <button
          onClick={() => scrollByAmount(-SCROLL_STEP)}
          className="w-4 h-4 flex items-center justify-center bg-gray-900 text-white rounded"
        >
          <ChevronUp size={12} />
        </button>

        {/* Track */}
        <div
          ref={trackRef}
          className="relative flex-1 w-2 bg-gray-200 rounded my-3"
        >
          <div
            onMouseDown={startDrag}
            className="absolute left-1/2 -translate-x-1/2 w-3 bg-gray-900 rounded-lg cursor-pointer"
            style={{
              height: `${thumbHeight}px`,
              transform: `translateY(${thumbTop}px)`,
            }}
          />
        </div>

        {/* Down button */}
        <button
          onClick={() => scrollByAmount(SCROLL_STEP)}
          className="w-4 h-4 flex items-center justify-center bg-gray-900 text-white rounded"
        >
           <ChevronDown size={12} />
        </button>
      </div>
    </div>
  );
}
