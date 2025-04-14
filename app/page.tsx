/** @format */
import FAQ from "@/components/home/FAQ";
import FeaturesSection from "@/components/home/Features";
import Hero from "@/components/home/Hero";

export default function Home() {
    return (
        <div className="relative min-h-screen overflow-hidden space pb-5">
            <Hero />
            <FeaturesSection />
            <FAQ />
        </div>
    );
}
