import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TemplatePagination({
  count,
  index,
  setIndex,
}: {
  count: number;
  index: number;
  setIndex: (n: number) => void;
}) {
  return (
    <div className="flex items-center gap-3 text-sm">

      <button
        onClick={() => setIndex(Math.max(index - 1, 0))}
        disabled={index === 0}
        className="p-1 disabled:opacity-40"
      >
        <ChevronLeft />
      </button>

      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          onClick={() => setIndex(i)}
          className={`px-1 ${
            i === index ? "font-bold text-[#F33FDE]" : "text-gray-600"
          }`}
        >
          {i + 1}
        </button>
      ))}

      <button
        onClick={() => setIndex(Math.min(index + 1, count - 1))}
        disabled={index === count - 1}
        className="p-1 disabled:opacity-40"
      >
        <ChevronRight />
      </button>

    </div>
  );
}