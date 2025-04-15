/** @format */
import dynamic from "next/dynamic";
import ArticleTemplate from "@/components/ArticleTemplate";

const ContentComponent = dynamic(() => import("../../../../../articles/satellites/artificial-satellites/artificial-satelllites-1-beginning"));

export default function BeginningArticlePage() {
  return (
    <ArticleTemplate topic="Artificial Satellites">
      <ContentComponent />
    </ArticleTemplate>
  );
}