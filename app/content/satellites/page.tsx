/** @format */
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

export default function SatellitesContentPage() {
  const cards = [
  {
    "title": "Artificial Satellites",
    "link": "/content/satellites/artificial-satellites",
    "summary": "This is a brief summary of the reading passage."
  },
  {
    "title": "Natural Satellites",
    "link": "/content/satellites/natural-satellites",
    "summary": "This is a brief summary of the reading passage."
  }
];

  return (
    <div className="mx-auto py-10">
      {/* Section Header is clickable and links to its own page */}
      <Link href={"/" + "satellites"}>
        <h2 className="text-3xl font-bold mb-6 hover:underline cursor-pointer">
          Satellites
        </h2>
      </Link>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, i) => (
          <Card key={i} className="hover:shadow-lg transition-shadow">
            <CardHeader className="p-4">
              <CardTitle className="text-xl">{card.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <p className="text-sm mb-4">{card.summary}</p>
              <Link 
                href={card.link}
                className="text-primary font-medium hover:underline"
              >
                Read More
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
