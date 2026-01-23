import DemoInput from "./DemoInput";
import ConsentCheckbox from "./ConsentCheckbox";
import { demoSectionData } from "@/data/website-builder/demoSectionData";

export default function DemoForm() {
  const { fields, consentText, ctaLabel } = demoSectionData;

  return (
    <form className="mt-8 flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
        {fields.map((field) => (
          <DemoInput
            key={field.id}
            label={field.label}
            type={field.type}
            fullWidth={field.fullWidth}
          />
        ))}
      </div>

      <div className="max-w-2xl w-full">
        <ConsentCheckbox text={consentText} />
      </div>

      <button
        type="submit"
        className="
          mt-6
          rounded-md
          bg-[#F33FDE]
          px-8 py-3
          text-sm font-semibold
          text-white
          hover:opacity-90
          transition
        "
      >
        {ctaLabel}
      </button>
    </form>
  );
}