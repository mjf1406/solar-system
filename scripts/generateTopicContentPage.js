/** @format */
const fs = require("fs-extra");
const path = require("path");

// Define the directories.
const ARTICLES_DIR = path.join(__dirname, "..", "articles");
const CONTENT_DIR = path.join(__dirname, "..", "app/content");

// Helper: Convert a dash-delimited string to Title Case with spaces.
// E.g. "solar-system" becomes "Solar System"
function titleCase(text) {
    return text
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

async function generateSectionCardsPages() {
    // Read immediate subdirectories of ARTICLES_DIR (sections)
    const sectionDirs = await fs.readdir(ARTICLES_DIR, { withFileTypes: true });

    for (const sectionEnt of sectionDirs) {
        if (!sectionEnt.isDirectory()) continue;

        const sectionName = sectionEnt.name; // e.g. "solar-system"
        const sectionTitle = titleCase(sectionName); // e.g. "Solar System"
        const sectionPath = path.join(ARTICLES_DIR, sectionName);

        // Read the child directories of this section (the reading passages)
        const passageDirs = await fs.readdir(sectionPath, {
            withFileTypes: true,
        });
        const cards = [];

        for (const passageEnt of passageDirs) {
            if (!passageEnt.isDirectory()) continue;
            const passageName = passageEnt.name; // e.g. "mercury", "venus", etc.
            const passageTitle = titleCase(passageName);
            // The link is assumed to be the route for the reading passage.
            // (Depending on your routing, you may want to prefix with "/" or "/content")
            const passageLink = `/content/${sectionName}/${passageName}`;

            // A placeholder summary for now. You could modify this to read a file
            // or extract an excerpt.
            const summary = "This is a brief summary of the reading passage.";

            cards.push({
                title: passageTitle,
                link: passageLink,
                summary,
            });
        }

        // Only generate a page if there are any cards for the section.
        if (cards.length === 0) continue;

        // Now, generate the section cards page.
        // The file will be created at /app/content/<sectionName>/page.tsx.
        const sectionContentDir = path.join(CONTENT_DIR, sectionName);
        await fs.ensureDir(sectionContentDir);
        const outputFile = path.join(sectionContentDir, "page.tsx");

        // We’ll use shadcn UI Card components and Next.js Link in our layout.
        const outputContent = `/** @format */
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

export default function ${titleCase(sectionName).replace(
            /\s+/g,
            ""
        )}ContentPage() {
  const cards = ${JSON.stringify(cards, null, 2)};

  return (
    <div className="mx-auto py-10">
      {/* Section Header is clickable and links to its own page */}
      <Link href={"/" + "${sectionName}"}>
        <h2 className="text-3xl font-bold mb-6 hover:underline cursor-pointer">
          ${sectionTitle}
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
`;

        await fs.writeFile(outputFile, outputContent, "utf8");
        console.log(`Generated section cards page: ${outputFile}`);
    }
}

generateSectionCardsPages().catch((err) => {
    console.error(err);
    process.exit(1);
});
