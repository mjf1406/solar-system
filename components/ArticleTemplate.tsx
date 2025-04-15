/** @format */
import { ReactNode } from "react";

interface ArticleTemplateProps {
    topic: string;
    children: ReactNode;
}

export default function ArticleTemplate({
    topic,
    children,
}: ArticleTemplateProps) {
    return (
        <div className="max-w-2xl w-full flex flex-col gap-2 py-5 px-2 md:px-5">
            <h1 className="text-4xl font-semibold">{topic}</h1>
            <div className="bg-background dark:bg-muted p-5 rounded-2xl">
                {children}
            </div>
        </div>
    );
}
