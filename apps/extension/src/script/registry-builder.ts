// @ts-nocheck
import fs from "fs";
import path, { basename } from "path";
import { rimraf } from "rimraf";

import { registry } from "../registry/components";
import { registrySchema } from "../registry/schema";
import { styles } from "../registry/styles";

console.log("📝 Writing registry index...");

const registryPath = path.join(process.cwd(), "src/__registry__");

const result = registrySchema.safeParse(registry);

if (!result.success) {
  console.error(result.error);
  process.exit(1);
}

// ----------------------------------------------------------------------------
// Build __registry__/index.tsx.
// ----------------------------------------------------------------------------
let index = `// @ts-nocheck
// This file is autogenerated by scripts/registry-builder.ts
// Do not edit this file directly.
import * as React from "react"

export const Index: Record<string, any> = {
  `;
console.log(process.cwd());

for (const style of styles) {
  index += `  "${style.name}": {`;

  // Build style index.
  for (const item of result.data) {
    // if (item.type === "components:ui") {
    //   continue
    // }

    const resolveFiles = item.files.map(
      (file) => `src/registry/${style.name}/${file}`
    );

    const type = item.type.split(":")[1];
    index += `
    "${item.name}": {
      name: "${item.name}",
      type: "${item.type}",
      registryDependencies: ${JSON.stringify(item.registryDependencies)},
      component: React.lazy(() => import("@/registry/${style.name}/${
      item.files[0]
    }")),
      files: [${resolveFiles.map((file) => `"${file}"`)}],
    },`;
  }

  index += `
  },`;
}

index += `
}
`;

if (!fs.existsSync(registryPath)) {
  fs.mkdirSync(registryPath);
}
// Write style index.
rimraf.sync(path.join(process.cwd(), "src/__registry__/index.tsx"));
fs.writeFileSync(path.join(process.cwd(), "src/__registry__/index.tsx"), index);

// write the registry to public dir
const names = result.data.filter((item) => item.type === "components:extension")
console.log("📝 Building index...");
const registryJson = JSON.stringify(names, null, 2);
console.log("📝 getting registry path registry...");
const publicRegistryPath = path.join(process.cwd(), "public/registry");
if (!fs.existsSync(publicRegistryPath)) {
  console.log("📝 Creating registry directory...");
  fs.mkdirSync(publicRegistryPath);
}

console.log("📝 Writing registry...");

// check if file exists
const registryFilePath = path.join(publicRegistryPath, "index.json");
if (fs.existsSync(registryFilePath)) {
  console.log("📝 Removing existing registry file...");
  fs.unlinkSync(registryFilePath);
}

fs.writeFileSync(registryFilePath, registryJson);

console.log("✅ Done!");
