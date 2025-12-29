import TopEditorialSection from "@/components/franchise-research/TopEditorialSection";
import ArticleGridSection from "@/components/franchise-research/ArticleGridSection";

export default function FranchiseResearchPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-2xl text-gray-800 font-semibold mb-8">
        Franchise Research
      </h2>

      {/* Section 1 */}
      <TopEditorialSection />

      {/* Section 2 */}
      <ArticleGridSection />
    </div>
  );
}
