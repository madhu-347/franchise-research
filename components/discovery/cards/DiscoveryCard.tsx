export default function DiscoveryCard({
  left,
  right,
  variant = "light",
  background,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
  variant?: "light" | "dark";
  background?: React.ReactNode;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg p-8 ${
        variant === "dark"
          ? "bg-[#0F3460] text-white"
          : "bg-[#F6F5F1] border border-[#0F3460]"
      }`}
    >
      {/* Decorative background layer */}
      {background && (
        <div className="pointer-events-none absolute inset-0 z-0">
          {background}
        </div>
      )}

      {/* Content */}
      <div
        className="
          relative z-10
          grid grid-cols-1 gap-2
          lg:grid-cols-[40%_60%]
          lg:items-center
        "
      >
        {left}
        {right}
      </div>
    </div>
  );
}
