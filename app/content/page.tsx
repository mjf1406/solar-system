/** @format */
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

export default function MainContentPage() {
  const sections = [
  {
    "section": "satellites",
    "title": "Satellites",
    "passages": [
      {
        "folder": "artificial-satellites",
        "title": "Artificial Satellites",
        "link": "/content/satellites/artificial-satellites",
        "summary": "This is a brief summary of the reading passage."
      },
      {
        "folder": "natural-satellites",
        "title": "Natural Satellites",
        "link": "/content/satellites/natural-satellites",
        "summary": "This is a brief summary of the reading passage."
      }
    ]
  },
  {
    "section": "solar-system",
    "title": "Solar System",
    "passages": [
      {
        "folder": "mercury",
        "title": "Mercury",
        "link": "/content/solar-system/mercury",
        "summary": "This is a brief summary of the reading passage."
      },
      {
        "folder": "sun",
        "title": "Sun",
        "link": "/content/solar-system/sun",
        "summary": "This is a brief summary of the reading passage."
      }
    ]
  }
];

  return (
    <div className="mx-auto py-10">
      {sections.map((section, idx) => (
        <div key={idx} className="mb-12">
          <Link href={`/content/${section.section}`}>
            <h2 className="text-3xl font-bold mb-6 hover:underline cursor-pointer">
              {section.title}
            </h2>
          </Link>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {section.passages.map((passage, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardHeader className="p-4">
                  <CardTitle className="text-xl">{passage.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-sm mb-4">{passage.summary}</p>
                  <Link 
                    href={passage.link}
                    className="text-primary font-medium hover:underline"
                  >
                    Read More
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
