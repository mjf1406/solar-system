/** @format */
import dynamic from "next/dynamic";
import ArticleTemplate from "@/components/ArticleTemplate";

const ContentComponent = dynamic(() => import("../../../../../articles/satellites/natural-satellites/natural-satelllites-2-growing"));

export default function GrowingArticlePage() {
  return (
    <ArticleTemplate topic="Natural Satellites">
      <ContentComponent />
    </ArticleTemplate>
  );
}