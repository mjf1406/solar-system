/** @format */

const fs = require("fs-extra");
const path = require("path");
const glob = require("glob");

const ARTICLES_DIR = path.join(__dirname, "..", "articles");
const CONTENT_DIR = path.join(__dirname, "..", "app/content");

// Helper to slugify a string (if needed)
function slugify(text) {
    return text.toLowerCase().replace(/\s+/g, "-");
}

// Helper to capitalize the first letter
function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

// Convert a string with dashes into PascalCase for function names.
// "artificial-satellites" -> "ArtificialSatellites"
function pascalCase(text) {
    return text
        .split("-")
        .map((word) => capitalize(word))
        .join("");
}

// New helper: Convert a string with dashes into Title Case with spaces for display.
// "natural-satellites" -> "Natural Satellites"
function titleCase(text) {
    return text
        .split("-")
        .map((word) => capitalize(word))
        .join(" ");
}

async function generate() {
    // Remove the content folder if it exists to start fresh.
    await fs.remove(CONTENT_DIR);
    console.log(`Removed ${CONTENT_DIR}`);
    await fs.ensureDir(CONTENT_DIR);

    // Get all TSX files under ARTICLES_DIR using glob.sync.
    const files = glob.sync(`${ARTICLES_DIR}/**/*.tsx`);
    console.log(`Found ${files.length} article files`);

    // Group files by topic folder.
    // We assume each file is named with the convention: <topic>-<order>-<slug>.tsx
    // e.g., mercury-1-beginning.tsx will go in group "solar-system/mercury".
    const topics = {};

    files.forEach((file) => {
        const relativePath = path.relative(ARTICLES_DIR, file);
        const dirName = path.dirname(relativePath); // e.g. "solar-system/mercury" or "satellites/artificial-satellites"
        const baseName = path.basename(file, ".tsx"); // e.g. "mercury-1-beginning" or "artificial-satellites-1-beginning"

        // Use a regex to extract topic, order, and slug.
        const match = baseName.match(/^(.+)-(\d+)-(.+)$/);
        if (!match) {
            console.warn(`Invalid file name format: ${file}`);
            return;
        }

        const [, topicName, order, slug] = match;

        if (!topics[dirName]) {
            topics[dirName] = [];
        }
        topics[dirName].push({
            topic: topicName, // e.g. "mercury" or "artificial-satellites"
            order,
            slug,
            filePath: file,
        });
    });

    // For each topic folder generate:
    //   a) A tabbed index page at /app/content/<topic folder>/page.tsx.
    //   b) Individual article pages under /app/content/<topic folder>/<slug>/page.tsx.
    for (const [dirName, articles] of Object.entries(topics)) {
        // Create the topic folder under app/content.
        const topicContentDir = path.join(CONTENT_DIR, dirName);
        await fs.ensureDir(topicContentDir);

        // Get the folder's base name.
        const folderBaseName = path.basename(dirName);
        // For display, use titleCase:
        const topicDisplayTitle = titleCase(folderBaseName);
        // For function names, use pascalCase:
        const topicFunctionName = pascalCase(folderBaseName);

        // Sort articles by order.
        articles.sort((a, b) => Number(a.order) - Number(b.order));

        // Build an array to later generate tabs in the topic index page.
        const tabsArray = [];

        // For each article, generate its own page.
        for (const article of articles) {
            const { topic, slug, filePath } = article;
            // Create a subfolder for the article under the topic folder:
            // e.g. /app/content/solar-system/mercury/beginning/
            const articlePageDir = path.join(topicContentDir, slug);
            await fs.ensureDir(articlePageDir);
            const articlePageFile = path.join(articlePageDir, "page.tsx");

            // Compute the relative import path from the article page directory to the source file.
            let relativeImportPath = path
                .relative(articlePageDir, filePath)
                .replace(/\\/g, "/")
                .replace(/\.tsx$/, ""); // remove .tsx extension

            // Also, compute a "raw" import path for use in the tab.
            // This is relative to the topic folder.
            let rawImportPath = path
                .relative(topicContentDir, filePath)
                .replace(/\\/g, "/")
                .replace(/\.tsx$/, "");

            // Construct a component name for the article based on its slug.
            const componentName = pascalCase(slug);

            // Generate the individual article page content using ArticleTemplate.
            const articlePageContent = `
/** @format */
import dynamic from "next/dynamic";
import ArticleTemplate from "@/components/ArticleTemplate";

const ContentComponent = dynamic(() => import("${relativeImportPath}"));

export default function ${componentName}ArticlePage() {
  return (
    <ArticleTemplate topic="${capitalize(topicDisplayTitle)}">
      <ContentComponent />
    </ArticleTemplate>
  );
}
      `;
            await fs.writeFile(
                articlePageFile,
                articlePageContent.trim(),
                "utf-8"
            );
            console.log(`Generated article page: ${articlePageFile}`);

            // Save info for tab generation on the topic index page.
            tabsArray.push({
                value: slug,
                label: capitalize(slug),
                // For the tab content, we reference the raw import path
                rawImportPath,
                componentName,
            });
        }

        // Generate the topic index page (tabbed view) at /app/content/<topic folder>/page.tsx.
        // Use the raw import for each tab so that ArticleTemplate is not wrapped.
        const indexPageFile = path.join(topicContentDir, "page.tsx");
        const indexPageContent = `
/** @format */
import dynamic from "next/dynamic";
import TabbedContentTemplate, { TabItem } from "@/components/TabbedContentTemplate";

${tabsArray
    .map(
        (tab) =>
            `const Content${tab.componentName} = dynamic(() => import("${tab.rawImportPath}"));`
    )
    .join("\n")}

const tabs: TabItem[] = [
  ${tabsArray
      .map(
          (tab) => `{
    value: "${tab.value}",
    label: "${tab.label}",
    content: <Content${tab.componentName} />
  }`
      )
      .join(",\n  ")}
];

export default function ${topicFunctionName}TabsPage() {
  return (
    <TabbedContentTemplate title="${topicDisplayTitle}" tabs={tabs} />
  );
}
    `;
        await fs.writeFile(indexPageFile, indexPageContent.trim(), "utf-8");
        console.log(`Generated topic index page: ${indexPageFile}`);
    }

    // Generate a layout file at /app/content/layout.tsx that uses the ContentLayout template.
    const layoutFile = path.join(CONTENT_DIR, "layout.tsx");
    const layoutContent = `
/** @format */
import ContentLayout from "@/components/LayoutTemplate";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ContentLayout>{children}</ContentLayout>;
}
  `;
    await fs.writeFile(layoutFile, layoutContent.trim(), "utf-8");
    console.log(`Generated layout file: ${layoutFile}`);
}

generate().catch((err) => {
    console.error(err);
    process.exit(1);
});
