import fs from 'fs';
import path from 'path';
import grayMatter from 'gray-matter';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const filePath = path.resolve('static/content/posts', `${params.slug}.md`);
  
  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    throw new Error(`Post not found for slug: ${params.slug}`);
  }

  const fileContents = fs.readFileSync(filePath, 'utf-8');
  const { data: frontMatter, content: body } = grayMatter(fileContents);

  // Return the parsed post data
  return {
    post: {
      ...frontMatter,
      body,
    },
  };
}
