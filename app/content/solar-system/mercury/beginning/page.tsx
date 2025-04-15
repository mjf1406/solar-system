/** @format */
import dynamic from "next/dynamic";
import ArticleTemplate from "@/components/ArticleTemplate";

const ContentComponent = dynamic(() => import("../../../../../articles/solar-system/mercury/mercury-1-beginning"));

export default function BeginningArticlePage() {
  return (
    <ArticleTemplate topic="Mercury">
      <ContentComponent />
    </ArticleTemplate>
  );
}