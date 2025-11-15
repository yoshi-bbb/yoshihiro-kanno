import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const outDir = path.join(process.cwd(), "out");

async function ensureNoJekyll() {
  await mkdir(outDir, { recursive: true });
  const target = path.join(outDir, ".nojekyll");
  await writeFile(target, "", { flag: "w" });
  console.log("Created", target);
}

ensureNoJekyll().catch((error) => {
  console.error("Failed to prepare static export:", error);
  process.exitCode = 1;
});
