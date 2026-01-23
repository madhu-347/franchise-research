import { useRef } from "react";

export default function SwipeWrapper({
  children,
  count,
  index,
  setIndex,
}: {
  children: React.ReactNode;
  count: number;
  index: number;
  setIndex: (n: number) => void;
}) {
  const touchStartX = useRef<number | null>(null);

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    const threshold = 60; // swipe sensitivity

    // Swipe Left → Next
    if (diff > threshold && index < count - 1) {
      setIndex(index + 1);
    }

    // Swipe Right → Prev
    if (diff < -threshold && index > 0) {
      setIndex(index - 1);
    }

    touchStartX.current = null;
  }

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="touch-pan-x"
    >
      {children}
    </div>
  );
}