/** @format */
const fs = require("fs-extra");
const path = require("path");

// Path to the articles folder.
const ARTICLES_DIR = path.join(__dirname, "..", "articles");
// Output file – you can choose its location.
// For example, a file that exports your content cards data.
const OUTPUT_FILE = path.join(__dirname, "..", "app/content-cards.ts");

/**
 * Capitalizes each word in a string.
 * e.g. "solar-system" becomes "Solar System"
 */
function formatTitle(text) {
    return text
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

async function generateContentCards() {
    // Read the items directly under /articles.
    const categories = await fs.readdir(ARTICLES_DIR, { withFileTypes: true });
    const contentCards = [];

    for (const categoryEnt of categories) {
        if (categoryEnt.isDirectory()) {
            const categoryName = categoryEnt.name; // e.g. "solar-system"
            const categoryTitle = formatTitle(categoryName);
            const catPath = path.join(ARTICLES_DIR, categoryName);
            // Get subdirectories in this category.
            const subItems = await fs.readdir(catPath, { withFileTypes: true });
            const links = [];

            for (const subEnt of subItems) {
                if (subEnt.isDirectory()) {
                    const childName = subEnt.name; // e.g. "mercury"
                    const childTitle = formatTitle(childName);
                    // Assuming that your tabbed page for a child is at /<category>/<child>
                    const link = `/content/${categoryName}/${childName}`;
                    links.push({ title: childTitle, link });
                }
            }
            // Only add if there are children found.
            if (links.length > 0) {
                contentCards.push({ title: categoryTitle, links });
            }
        }
    }

    // Generate a file that exports the contentCards array.
    const output = `/** @format */
  
export const contentCards = ${JSON.stringify(contentCards, null, 2)};
`;
    await fs.writeFile(OUTPUT_FILE, output, "utf8");
    console.log(`Generated content cards file: ${OUTPUT_FILE}`);
}

generateContentCards().catch((err) => {
    console.error(err);
    process.exit(1);
});
