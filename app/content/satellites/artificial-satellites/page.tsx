/** @format */
import dynamic from "next/dynamic";
import TabbedContentTemplate, { TabItem } from "@/components/TabbedContentTemplate";

const ContentBeginning = dynamic(() => import("../../../../articles/satellites/artificial-satellites/artificial-satelllites-1-beginning"));
const ContentGrowing = dynamic(() => import("../../../../articles/satellites/artificial-satellites/artificial-satelllites-2-growing"));

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

export default function ArtificialSatellitesTabsPage() {
  return (
    <TabbedContentTemplate title="Artificial Satellites" tabs={tabs} />
  );
}