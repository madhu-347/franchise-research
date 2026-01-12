import DiscoveryIntro from "./intro/DiscoveryIntro";
import DiscoveryActions from "./intro/DiscoveryActions";
import DiscoveryCards from "./cards/DiscoveryCards";

export default function DiscoverySection() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 space-y-10">
        <DiscoveryIntro />
        <DiscoveryActions />
        <DiscoveryCards />
      </div>
    </section>
  );
}
