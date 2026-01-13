import RankingsGrid from "./grid/RankingsGrid";
import RankingsSidebar from "./sidebar/RankingsSidebar";

export default function RankingsSection() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_360px]">
          <RankingsGrid />
          <RankingsSidebar />
        </div>
      </div>
    </section>
  );
}
