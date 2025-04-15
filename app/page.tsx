/** @format */
import Donate from "@/components/home/Donate";
import FAQ from "@/components/home/FAQ";
import FeaturesSection from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";

export default function Home() {
    return (
        <div className="relative min-h-screen overflow-hidden space pb-64">
            <Hero />
            <FeaturesSection />
            <HowItWorks />
            <Donate />
            <FAQ />
        </div>
    );
}
