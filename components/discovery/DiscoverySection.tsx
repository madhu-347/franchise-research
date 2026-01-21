import DiscoveryIntro from "./intro/DiscoveryIntro";
import DiscoveryActions from "./intro/DiscoveryActions";
import DiscoveryCards from "./cards/DiscoveryCards";

export default function DiscoverySection() {
  return (
    <section
      className=" bg-cover bg-top bg-no-repeat py-16"
      style={{
        backgroundImage:
          "url('/images/discovery/discovery-bg.png')",
      }}
    >
      {/* Content wrapper */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 space-y-10">
        <DiscoveryIntro />
        <DiscoveryActions />
        <DiscoveryCards />
      </div>
    </section>
  );
}
