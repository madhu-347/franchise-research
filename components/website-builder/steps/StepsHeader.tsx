export default function StepsHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900">{title}</h2>

      <p
        className="mt-3 text-gray-600"
        style={{ fontFamily: "Georgia, serif" }}
      >
        {subtitle}
      </p>
    </div>
  );
}