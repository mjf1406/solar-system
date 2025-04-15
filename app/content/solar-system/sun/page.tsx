/** @format */
import dynamic from "next/dynamic";
import TabbedContentTemplate, { TabItem } from "@/components/TabbedContentTemplate";

const ContentBeginning = dynamic(() => import("../../../../articles/solar-system/sun/sun-1-beginning"));
const ContentGrowing = dynamic(() => import("../../../../articles/solar-system/sun/sun-2-growing"));

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

export default function SunTabsPage() {
  return (
    <TabbedContentTemplate title="Sun" tabs={tabs} />
  );
}