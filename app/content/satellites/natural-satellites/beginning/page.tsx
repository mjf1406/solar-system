/** @format */
import dynamic from "next/dynamic";
import ArticleTemplate from "@/components/ArticleTemplate";

const ContentComponent = dynamic(() => import("../../../../../articles/satellites/natural-satellites/natural-satelllites-1-beginning"));

export default function BeginningArticlePage() {
  return (
    <ArticleTemplate topic="Natural Satellites">
      <ContentComponent />
    </ArticleTemplate>
  );
}