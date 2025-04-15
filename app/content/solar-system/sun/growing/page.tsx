/** @format */
import dynamic from "next/dynamic";
import ArticleTemplate from "@/components/ArticleTemplate";

const ContentComponent = dynamic(() => import("../../../../../articles/solar-system/sun/sun-2-growing"));

export default function GrowingArticlePage() {
  return (
    <ArticleTemplate topic="Sun">
      <ContentComponent />
    </ArticleTemplate>
  );
}