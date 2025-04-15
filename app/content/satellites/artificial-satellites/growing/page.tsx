/** @format */
import dynamic from "next/dynamic";
import ArticleTemplate from "@/components/ArticleTemplate";

const ContentComponent = dynamic(() => import("../../../../../articles/satellites/artificial-satellites/artificial-satelllites-2-growing"));

export default function GrowingArticlePage() {
  return (
    <ArticleTemplate topic="Artificial Satellites">
      <ContentComponent />
    </ArticleTemplate>
  );
}