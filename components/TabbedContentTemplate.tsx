/** @format */
import { ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export interface TabItem {
    value: string;
    label: string;
    content: ReactNode;
}

interface TabbedContentTemplateProps {
    tabs: TabItem[];
    title?: string;
}

export default function TabbedContentTemplate({
    tabs,
    title = "Content",
}: TabbedContentTemplateProps) {
    if (!tabs.length) {
        return <div>No content available.</div>;
    }

    // Use the first tab's value as the default.
    const defaultValue = tabs[0].value;

    return (
        <div className="max-w-2xl w-full flex flex-col gap-2 py-5 px-2 md:px-5">
            <h1 className="text-4xl font-semibold">{title}</h1>
            <Tabs
                defaultValue={defaultValue}
                className="w-full"
            >
                <TabsList className="dark:bg-background">
                    {tabs.map((tab) => (
                        <TabsTrigger
                            key={tab.value}
                            className="rounded-b-none"
                            value={tab.value}
                        >
                            {tab.label}
                        </TabsTrigger>
                    ))}
                </TabsList>
                {tabs.map((tab) => (
                    <TabsContent
                        key={tab.value}
                        value={tab.value}
                        className="bg-background dark:bg-muted w-full mx-auto -mt-3 p-5 -ml-5 rounded-2xl"
                    >
                        {tab.content}
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
}
