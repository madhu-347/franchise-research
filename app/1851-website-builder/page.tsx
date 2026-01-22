'use client';
import Header from '@/components/header/Header';
import WebsiteBuilderHero from "@/components/website-builder/WebsiteBuilderHero";
import WebsiteBuilderDemoSection from "@/components/website-builder/WebsiteBuilderDemoSection";
import WebsiteExamplesSection from '@/components/website-builder/website-examples/WebsiteExamplesSection';
import WebsiteBuilderStepsSection from '@/components/website-builder/steps/WebsiteBuilderStepsSection';
import Footer from '@/components/footer/Footer';
import TemplateLibrarySection from '@/components/website-builder/template-library/TemplateLibrarySection';

export default function Page() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
                <WebsiteBuilderHero />
                <WebsiteBuilderDemoSection />
                <WebsiteExamplesSection />
                <WebsiteBuilderStepsSection />
                <TemplateLibrarySection />
                <WebsiteBuilderDemoSection />
                <Footer />
        </div>
    );
}