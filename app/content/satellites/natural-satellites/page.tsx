/** @format */
import dynamic from "next/dynamic";
import TabbedContentTemplate, { TabItem } from "@/components/TabbedContentTemplate";

const ContentBeginning = dynamic(() => import("../../../../articles/satellites/natural-satellites/natural-satelllites-1-beginning"));
const ContentGrowing = dynamic(() => import("../../../../articles/satellites/natural-satellites/natural-satelllites-2-growing"));

const tabs: TabItem[] = [
  {
    value: "beginning",
    label: "Beginning",
    content: <ContentBeginning />
  },
  {
    value: "growing",
    label: "Growing",
    content: <ContentGrowing />
  }
];

export default function NaturalSatellitesTabsPage() {
  return (
    <TabbedContentTemplate title="Natural Satellites" tabs={tabs} />
  );
}