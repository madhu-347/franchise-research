export default function IntroSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Left */}
      <h2 className="text-3xl text-black md:text-4xl font-bold uppercase leading-tight">
        Qorem ipsum dolor <br />
        sit amet, conse
      </h2>

      {/* Right */}
      <div className="space-y-4">
        <p className="text-gray-600 max-w-md">
          Qorem ipsum dolor sit amet, consectetur adipiscing elit.
          Etiam eu turpis molestie, dictum est a.
        </p>

        <button className="px-6 py-2 rounded-full bg-gray-900 uppercase text-white text-sm">
          Learn more
        </button>
      </div>
    </div>
  );
}
