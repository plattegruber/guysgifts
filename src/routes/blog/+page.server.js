import fs from 'fs';
import path from 'path';
import grayMatter from 'gray-matter';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const postsDir = path.resolve('src/lib/content/posts'); // Path to the posts directory
  const files = fs.readdirSync(postsDir); // Get all filenames in the directory

  const posts = files.map((file) => {
    const filePath = path.join(postsDir, file);
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const { data: frontMatter } = grayMatter(fileContents);

    // Return only metadata (front matter) for the list view
    return {
      slug: frontMatter.slug,
      title: frontMatter.title,
      mainImageUrl: frontMatter.mainImageUrl,
      author: frontMatter.author,
    };
  });

  return { posts };
}
