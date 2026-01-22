export default function DemoInput({
  label,
  type = "text",
  fullWidth = false,
}: {
  label: string;
  type?: string;
  fullWidth?: boolean;
}) {
  return (
    <div className={`flex flex-col gap-1 ${fullWidth ? "md:col-span-2" : ""}`}>
      <label className="text-xs flex  justify-start text-gray-300">{label}</label>
      <input
        type={type}
        className="
          rounded-full
          bg-white
          px-4 py-2
          text-sm text-black
          outline-none
          focus:ring-2
          focus:ring-[#F33FDE]
        "
      />
    </div>
  );
}
