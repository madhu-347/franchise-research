import FeaturedArticleCard from "./FeaturedArticleCard";
import ScrollableSidebar from "./ScrollableSidebar";

export default function TopEditorialSection() {
  return (
    <section
      className="
        grid gap-8
        grid-cols-1
        lg:grid-cols-12
      "
    >
      {/* Left – Featured */}
      <div className="lg:col-span-8">
        <FeaturedArticleCard />
      </div>

      {/* Right – Sidebar */}
    <div
      className="
          lg:col-span-4
          lg:max-h-62.5
      "
      >
        <ScrollableSidebar />
     </div>
    </section>
  );
}
