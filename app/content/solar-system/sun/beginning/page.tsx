/** @format */
import dynamic from "next/dynamic";
import ArticleTemplate from "@/components/ArticleTemplate";

const ContentComponent = dynamic(() => import("../../../../../articles/solar-system/sun/sun-1-beginning"));

export default function BeginningArticlePage() {
  return (
    <ArticleTemplate topic="Sun">
      <ContentComponent />
    </ArticleTemplate>
  );
}