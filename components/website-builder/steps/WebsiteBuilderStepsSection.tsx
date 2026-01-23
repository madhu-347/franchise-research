import { stepsData } from "@/data/website-builder/stepsData";
import StepsHeader from "./StepsHeader";
import StepCard from "./StepCard";

export default function WebsiteBuilderStepsSection() {
  const { title, subtitle, steps } = stepsData;

  return (
    <section className="w-full py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 flex flex-col gap-14">

        {/* Header */}
        <StepsHeader title={title} subtitle={subtitle} />

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <StepCard
              key={step.id}
              number={step.id}
              title={step.title}
              image={step.image}
            />
          ))}
        </div>

      </div>
    </section>
  );
}