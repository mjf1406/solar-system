/** @format */
const fs = require("fs-extra");
const path = require("path");

// Define the source articles folder and the destination content folder.
const ARTICLES_DIR = path.join(__dirname, "..", "articles");
const CONTENT_DIR = path.join(__dirname, "..", "app/content");

// Helper to convert a dash-delimited string to Title Case with spaces.
// For example, "solar-system" becomes "Solar System".
function titleCase(text) {
    return text
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

async function generateMainContentPage() {
    // Read the immediate subdirectories of ARTICLES_DIR.
    const sectionDirs = await fs.readdir(ARTICLES_DIR, { withFileTypes: true });
    const sections = [];

    for (const sectionEnt of sectionDirs) {
        if (sectionEnt.isDirectory()) {
            const sectionName = sectionEnt.name; // e.g. "solar-system" or "satellites"
            const sectionPath = path.join(ARTICLES_DIR, sectionName);
            const sectionTitle = titleCase(sectionName);

            // Read immediate child directories in this section (reading passages).
            const passageDirs = await fs.readdir(sectionPath, {
                withFileTypes: true,
            });
            const passages = [];

            for (const passageEnt of passageDirs) {
                if (passageEnt.isDirectory()) {
                    const passageName = passageEnt.name; // e.g. "mercury", "venus", etc.
                    const passageTitle = titleCase(passageName);
                    // Assuming the reading passage pages you generated live at: /app/content/<section>/<passage>/page.tsx
                    // and that route becomes `/<section>/<passage>`.
                    const passageLink = `/content/${sectionName}/${passageName}`;
                    // Here we simply provide a placeholder summary.
                    const summary =
                        "This is a brief summary of the reading passage.";
                    passages.push({
                        folder: passageName,
                        title: passageTitle,
                        link: passageLink,
                        summary,
                    });
                }
            }

            // Only add a section if there are passages.
            if (passages.length > 0) {
                sections.push({
                    section: sectionName, // we'll use this for linking (e.g. "solar-system")
                    title: sectionTitle, // for display ("Solar System")
                    passages,
                });
            }
        }
    }

    // Now generate the page file at /app/content/page.tsx.
    // This page will render each section with a clickable header and a grid of cards.
    const outputContent = `/** @format */
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

export default function MainContentPage() {
  const sections = ${JSON.stringify(sections, null, 2)};

  return (
    <div className="mx-auto py-10">
      {sections.map((section, idx) => (
        <div key={idx} className="mb-12">
          <Link href={\`/content/\${section.section}\`}>
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
`;
    const outputFile = path.join(CONTENT_DIR, "page.tsx");
    await fs.writeFile(outputFile, outputContent, "utf8");
    console.log(`Generated main content page: ${outputFile}`);
}

generateMainContentPage().catch((err) => {
    console.error(err);
    process.exit(1);
});
