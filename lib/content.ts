import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const sectionsDir = path.join(process.cwd(), "content/sections");

export function getSectionData<T>(name: string): T {
  const filePath = path.join(sectionsDir, `${name}.md`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data } = matter(raw);
  return data as T;
}

export async function getSectionHtml(name: string): Promise<string> {
  const filePath = path.join(sectionsDir, `${name}.md`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { content } = matter(raw);
  const processed = await remark().use(html).process(content);
  return processed.toString();
}
