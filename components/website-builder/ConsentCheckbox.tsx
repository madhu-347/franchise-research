export default function ConsentCheckbox({ text }: { text: string }) {
  return (
    <label className="flex items-start gap-3 text-xs text-gray-300 mt-4">
      <input type="checkbox" className="mt-1 accent-[#F33FDE]" />
      <span>{text}</span>
    </label>
  );
}