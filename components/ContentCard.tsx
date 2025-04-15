/** @format */
import React from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface ContentCardProps {
    title: string;
    links: {
        title: string;
        link: string;
    }[];
}

const ContentCard: React.FC<ContentCardProps> = ({ title, links }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-xl font-bold">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-1">
                    {links.map((linkItem, index) => (
                        <li key={index}>
                            <Link
                                href={linkItem.link}
                                className="text-primary hover:underline transition-colors"
                            >
                                {linkItem.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
};

export default ContentCard;
