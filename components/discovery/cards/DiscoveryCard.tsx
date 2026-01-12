export default function DiscoveryCard({
  left,
  right,
  variant = "light",
}: {
  left: React.ReactNode;
  right: React.ReactNode;
  variant?: "light" | "dark";
}) {
  return (
    <div
      className={`rounded-lg p-8 ${
        variant === "dark"
          ? "bg-blue-900 text-white"
          : "bg-gray-50"
      }`}
    >
      <div
        className="
          grid grid-cols-1 gap-8
          lg:grid-cols-[30%_70%]
        "
      >
        {left}
        {right}
      </div>
    </div>
  );
}
