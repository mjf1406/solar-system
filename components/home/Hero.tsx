/** @format */

// components/landing/Hero.tsx

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Rocket } from "lucide-react";
import Link from "next/link";
import { ALPHA_TESTERS_COUNT, DOMAIN_NAME } from "@/lib/constants";

export default function Hero() {
    return (
        <section
            id="hero"
            className="w-full h-dvh py-12 md:py-24 lg:py-32 relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-background via-background/80 to-primary/5"
        >
            {/* Animated background elements */}
            {/* <div className="absolute inset-0 z-0">
                <div className="absolute -top-20 -left-40 w-[800px] h-[800px] bg-primary/10 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -right-40 w-[800px] h-[800px] bg-secondary/10 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-10"></div>
            </div> */}

            <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-primary/10" />

            {/* Content container with max width */}
            <div className="w-full max-w-4xl mx-auto px-4 md:px-6 relative z-10">
                {/* Social Proof & Blog Link */}
                {/* <div className="flex flex-col justify-between h-full items-center gap-4 mb-8">
                    <Link
                        href={`https://tattered-raptor-b11.notion.site/18ff3919e41d8019a43ecc4a319fa9c8?v=18ff3919e41d80a19fe4000c4d124a87`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Badge
                            variant="secondary"
                            className="gap-2 hover:bg-secondary/80"
                        >
                            🎉 Checkout our Roadmap!{" "}
                            <ArrowRight className="h-4 w-4" />
                        </Badge>
                    </Link>
                </div> */}

                {/* Main Content */}
                <div className="flex flex-col items-center gap-4 text-center">
                    <div className="space-y-4">
                        <h1 className="text-5xl font-bold tracking-tighter md:text-6xl lg:text-7xl text-foreground">
                            Differentiated content for{" "}
                            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                all{" "}
                            </span>
                            of your students.
                        </h1>
                        <p className="mx-auto max-w-[700px] text-muted-foreground text-xl md:text-2xl">
                            Our differentiated content spans numerous topics and
                            ranges from grades 1 to 8 to meet your
                            differentiation needs in elementary school.{" "}
                        </p>
                    </div>

                    <div className="mt-4 flex flex-wrap flex-col md:flex-row gap-2 justify-center items-stretch">
                        <Button
                            variant="default"
                            className="h-12 px-8 text-lg"
                        >
                            <Link href="/content">Start reading!</Link>
                        </Button>
                        <Button
                            variant="outline"
                            className="h-12 px-8 text-lg"
                        >
                            <Link href="#features">Learn more</Link>
                        </Button>
                    </div>
                    {/* <p className="text-sm -mb-4">
                        😁 {ALPHA_TESTERS_COUNT} satisfied alpha testers!
                    </p> */}
                </div>
            </div>

            {/* Animated border bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>
        </section>
    );
}
