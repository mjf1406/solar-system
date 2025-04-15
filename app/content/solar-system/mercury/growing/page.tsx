/** @format */
import dynamic from "next/dynamic";
import ArticleTemplate from "@/components/ArticleTemplate";

const ContentComponent = dynamic(() => import("../../../../../articles/solar-system/mercury/mercury-2-growing"));

export default function GrowingArticlePage() {
  return (
    <ArticleTemplate topic="Mercury">
      <ContentComponent />
    </ArticleTemplate>
  );
}