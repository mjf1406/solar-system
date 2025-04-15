/** @format */
// @/components/home/Features.tsx

import React from "react";
import { contentCards } from "@/app/content-cards";
import ContentCard from "../ContentCard";

// Define types
interface ContentItem {
    name: string;
    description: string;
}

interface ContentCardProps {
    title: string;
    description: string;
    content: ContentItem[];
    underConstruction: boolean;
    icon: React.ComponentType<{ className?: string }>;
}

// Main component
export default function ContentSection() {
    return (
        <div className="w-full mx-auto mt-20">
            <div className="px-4 max-w-7xl flex flex-col justify-center items-center mx-auto">
                <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
                    <h2
                        id="features"
                        className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
                    >
                        Differentiation is not easy
                    </h2>
                    <p className="text-muted-foreground">
                        It&apos;s also a really time-consuming task. So, enjoy
                        all of the differentiated content I&apos;ve made for my
                        classes to your heart's content! And the best part?
                        It&apos;s <span className="font-bold">free</span> 🎉
                        (for as long as it&apos;s free for me to keep online)
                    </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {contentCards.map((card, index) => (
                        <ContentCard
                            key={index}
                            title={card.title}
                            links={card.links}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
